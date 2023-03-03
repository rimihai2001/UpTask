import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-alerts',
  templateUrl: './reminder-alerts.component.html',
  styleUrls: ['./reminder-alerts.component.scss'],
})
export class ReminderAlertsComponent implements OnInit {
  @Input() remainingTasks: number;
  constructor() {}

  ngOnInit(): void {
    this.generateAlerts();
  }

  //Function that checks 1 time per minute if the hour has a notification and give a custom alert if the check is true
  generateAlerts() {
    setInterval(function () {
      var date = new Date();
      if (date.getHours() == 18 && date.getMinutes() == 0) {
        if(this.remainingTasks>1){
          alert(
            "You really need to hurry up...\nYou've got" +
              this.remainingTasks +
              'tasks that have a deadline today!'
          );
        }
        else if(this.remainingTasks==1){
          alert(
            "You've got only one task left, you got this!"
          );
        }
        else {
          alert("You already finished all your tasks?!\nCongratulations, that's impressive!")
        }
        
      }
      else if (date.getHours() == 10 && date.getMinutes() == 0) {
        if(this.remainingTasks>1){
          alert(
            "Good morning, a new day is ready to begin!\nYou've got" +
              this.remainingTasks +
              'tasks that have a deadline today!'
          );
        }
        else if(this.remainingTasks==1){
          alert(
            "Good morning! You've got only one task for today, what a good day!"
          );
        }
        else {
          alert("Good morning!\nYou are free today, I am going to miss you!")
        }
        
      }
      else if (date.getHours() == 13 && date.getMinutes() == 0) {
        alert(
          "Pssst... I know you are working hard, but it's time for a lunch break."
        );
      }
      else if (date.getHours() == 20 && date.getMinutes() == 0) {
        alert(
          "It's time for dinner! Let's call it a day!"
        );
      }
    }, 60000);
  }
}
