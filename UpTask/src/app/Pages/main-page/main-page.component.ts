import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  editTaskForm!: FormGroup;
  allTasks!: Task[];
  sortedTasks: Task[];
  nameTsk: string;
  descriptionTsk: string;
  labelTsk: string;
  dateTsk: Date;
  todayDate: string;
  viewTask: Task;
  editMode: boolean = false;
  viewMode: boolean = false;
  noTasksSchool: number;
  noTasksWork: number;
  noTasksOther: number;
  profileRole: string;

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private dateAdapter: DateAdapter<Date>,
    private snackBar: MatSnackBar
  ) {
    this.dateAdapter.setLocale('en-GB'); //DD/MM/YYYY
    this.getStarted();
  }

  ngOnInit(): void {
    //Form initialization
    this.editTaskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('', Validators.required),
      label: new FormControl('', Validators.required),
      taskDeadline: new FormControl('', Validators.required),
    });

    //Get today date
    let today = new Date();
    this.todayDate =
      today.getDate() +
      '/' +
      (today.getMonth() + 1) +
      '/' +
      today.getFullYear();
  }

  //Retrieve the data of tasks and user info
  async getStarted() {
    this.noTasksSchool = 0;
    this.noTasksWork = 0;
    this.noTasksOther = 0;
    var tsks: Task[];
    tsks = [];
    await this.getTasks().then((value) => {
      tsks = value as Task[];
    });

    var details: string[];
    details = [];
    await this.getDetails().then((value) => {
      details = value as string[];
    });

    this.profileRole = details[1];

    this.allTasks = [...tsks];
    tsks.sort(compareDate);
    this.sortedTasks = tsks;

    //Keep the number of active tasks with every label
    for (let i = 0; i < this.allTasks.length; i++) {
      if (!this.allTasks[i].completed) {
        switch (this.allTasks[i].label) {
          case "school":
            this.noTasksSchool = this.noTasksSchool + 1;
            break;
          case "work":
            this.noTasksWork = this.noTasksWork + 1;
            break;
          case "other":
            this.noTasksOther = this.noTasksOther + 1;
            break;
        }
      }

    }
  }

  //Fetch the tasks from the database
  getTasks() {
    return new Promise((resolve, reject) => {
      this.db
        .list('users/' + localStorage.getItem('user') + '/tasks/tasks')
        .valueChanges()
        .subscribe((value) => {
          resolve(value);
        });
    });
  }

  //Fetch the user details from the database
  getDetails() {
    return new Promise((resolve, reject) => {
      this.db
        .list('users/' + localStorage.getItem('user') + '/info')
        .valueChanges()
        .subscribe((value) => {
          resolve(value);
        });
    });
  }

  //Function to log out
  logout(): void {
    this.afAuth.signOut();
    localStorage.removeItem('user');
  }

  //Function for editing a task
  editTask() {
    if (this.editTaskForm.valid) {
      let editTaskFormData = {
        name: this.editTaskForm.value.taskName,
        description: this.editTaskForm.value.taskDescription,
        label: this.editTaskForm.value.label,
        expiration_date:
          this.editTaskForm.value.taskDeadline.getDate() +
          '/' +
          (this.editTaskForm.value.taskDeadline.getMonth() + 1) +
          '/' +
          this.editTaskForm.value.taskDeadline.getFullYear(),
        completed: false,
      };
      let index = this.allTasks.findIndex((obj) => obj == this.viewTask);
      let username = localStorage.getItem('user');
      this.db.object('users/' + username + '/tasks/tasks/' + index).update({
        name: editTaskFormData.name,
        description: editTaskFormData.description,
        label: editTaskFormData.label,
        expiration_date: editTaskFormData.expiration_date,
        completed: false,
      });
      this.editTaskForm.reset({
        label: '',
      });
      this.getStarted();
      this.snackBar.open("Task edited successfully", "OK", { duration: 3000 });
      this.editMode = false;
    } else {
      alert("Please complete all the fields");
      return;

    }
  }

  //Function to check if the task is not expired
  notExpired(date) {
    let dtask = date.split('/').reverse();
    let dtoday = this.todayDate.split('/').reverse();
    for (let i = 0; i < 3; i++) {
      if (parseInt(dtask[i]) > parseInt(dtoday[i])) return true;
      else if (parseInt(dtask[i]) < parseInt(dtoday[i])) return false;
    }

    return true;
  }

  //Function to mark the task as completed
  MarkCompleted(task: Task) {
    if (!this.notExpired(task.expiration_date)) {
      this.DeleteTask(task);
    } else {
      let index = this.allTasks.findIndex((obj) => obj == task);
      let username = localStorage.getItem('user');
      this.db
        .object('users/' + username + '/tasks/tasks/' + index)
        .update({ completed: true });
      this.getStarted();

    }
    this.snackBar.open("Congratulations! You completed the task!", "Yey!", { duration: 3000 });
  }

  //Function to uncomplete a task
  MarkNotCompleted(task: Task) {
    let index = this.allTasks.findIndex((obj) => obj == task);
    let username = localStorage.getItem('user');
    this.db
      .object('users/' + username + '/tasks/tasks/' + index)
      .update({ completed: false });
    this.getStarted();
    this.snackBar.open("Not completed? You lied to me!", "Sorry", { duration: 3000 });
  }


  //Function to delete a task
  DeleteTask(task: Task) {
    let index = this.allTasks.findIndex((obj) => obj == task);
    let username = localStorage.getItem('user');
    let newTaskArray = [...this.allTasks];
    newTaskArray.splice(index, 1);
    this.db
      .object('users/' + username + '/tasks')
      .update({ tasks: newTaskArray });
    this.getStarted();
    this.snackBar.open("One less task to worry about...", "Nice", { duration: 3000 });
  }

  //Function to go to Add Task page
  goToAddTask() {
    this.router.navigate(['./add']);
  }

  //Function to go to task view mode
  goToViewMode(task: Task) {
    this.viewTask = task;
    this.viewMode = true;
  }

  //Function to go to task edit mode, where the form will be already completed with current data
  goEditMode() {
    this.editMode = true;
    this.viewMode = false;
    let taskDate = this.viewTask.expiration_date.split("/");
    let formDate = new Date(parseInt(taskDate[2]), parseInt(taskDate[1])-1, parseInt(taskDate[0]));
    console.log(this.viewTask.expiration_date, taskDate, formDate);
    this.editTaskForm = new FormGroup({
      taskName: new FormControl(this.viewTask.name, Validators.required),
      taskDescription: new FormControl(this.viewTask.description, Validators.required),
      label: new FormControl(this.viewTask.label, Validators.required),
      taskDeadline: new FormControl(formDate, Validators.required),
    });

    console.log(this.editTaskForm.value);
  }

  //Function to return to view mode from edit mode
  returnViewMode() {
    this.editMode = false;
    this.viewMode = true;
  }

  //Function to return to main page from view mode
  returnMainPage() {
    this.editMode = false;
    this.viewMode = false;
  }
}



//Function to compare two dates that is used for sorting the array
function compareDate(a: Task, b: Task) {
  let task1 = a.expiration_date.split('/').reverse();
  let task2 = b.expiration_date.split('/').reverse();

  for (let i = 0; i < 3; i++) {
    if (parseInt(task1[i]) > parseInt(task2[i])) return 1;
    else if (parseInt(task1[i]) < parseInt(task2[i])) return -1;
  }

  return 0;
}


class Task {
  name: string | undefined;
  description: string | undefined;
  label: string | undefined;
  expiration_date: string | undefined;
  completed: boolean | undefined;
}
