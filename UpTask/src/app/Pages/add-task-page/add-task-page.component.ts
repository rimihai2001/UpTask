import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.scss']
})
export class AddTaskPageComponent implements OnInit {
  addTaskForm!: FormGroup;
  allTasks!: Task[];
  sortedTasks: Task[];
  nameTsk: string;
  descriptionTsk: string;
  labelTsk: string;
  dateTsk: Date;
  todayDate: string;
  noTodayTasks: number;
  profileRole: string;

  constructor(private db: AngularFireDatabase, private snackBar: MatSnackBar) { this.getStarted(); }

  ngOnInit(): void {
    //Form initialization
    this.addTaskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('', [Validators.required]),
      label: new FormControl('', Validators.required),
      taskDeadline: new FormControl('', Validators.required),
    });

    //Get today's date when opening the page
    let today = new Date();
    this.todayDate =
      today.getDate() +
      '/' +
      (today.getMonth() + 1) +
      '/' +
      today.getFullYear();
  }

  //Function to add task from the form to the database
  addTask() {
    if (this.addTaskForm.valid) {
      this.nameTsk = this.addTaskForm.value.taskName;
      this.descriptionTsk = this.addTaskForm.value.taskDescription;
      this.labelTsk = this.addTaskForm.value.label;
      this.dateTsk = this.addTaskForm.value.taskDeadline;

      let addTaskFormData = {
        name: this.nameTsk,
        description: this.descriptionTsk,
        label: this.labelTsk,
        expiration_date:
          this.dateTsk.getDate() +
          '/' +
          (this.dateTsk.getMonth() + 1) +
          '/' +
          this.dateTsk.getFullYear(),
        completed: false,
      };
      this.allTasks.push(addTaskFormData);
      let username = localStorage.getItem('user');
      this.db
        .object('users/' + username + '/tasks')
        .set({ tasks: this.allTasks });
      this.addTaskForm.reset(
        {
          "label": ""
        }
      );
      this.getStarted();
      this.snackBar.open("Task added", "OK", {duration: 3000});
    } else {
      return;
    }
  }

  //Function to get the current tasks and user info from the database
  async getStarted() {
    var tsks: Task[];
    tsks = [];
    await this.getTasks().then((value) => {
      tsks = value as Task[];
    });
    this.allTasks = [...tsks];
    tsks.sort(compareDate);

    var details: string[];
    details = [];
    await this.getDetails().then((value) => {
      details = value as string[];
    });

    this.profileRole = details[1];

    //Check how many task are due today
    for(let i=0; i<this.allTasks.length; i++)
    {
      if(this.allTasks[i].expiration_date === this.todayDate && !this.allTasks[i].completed)
        this.noTodayTasks=this.noTodayTasks+1;
    }

  }

  //Function to fetch the current tasks from the database
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

  //Function to fetch the user details from the database
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


}

//Function to compare dates that is used at array sorting
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

