import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-message',
  templateUrl: './random-message.component.html',
  styleUrls: ['./random-message.component.scss']
})
export class RandomMessageComponent implements OnInit {
  //Array with healthy messages
  healthyMessages: object[] = [{
    message: "Drink some water!",
    icon: "../../../assets/icons/water-icon.png"
  },
  {
    message: "Do some yoga!",
    icon: "../../../assets/icons/yoga-icon.png",
  },
  {
    message: "Eat an apple!",
    icon: "../../../assets/icons/apple-icon.png",
  },
  {
    message: "Don't forget to get some fresh air!",
    icon: "../../../assets/icons/plane-icon.png",
  },
  ];
  selectedMsg: object;
  selectedIcon: string;
  randomNumber: number;
  constructor() { }

  ngOnInit(): void {
    //Selection of a random message
    this.randomNumber = Math.floor(Math.random() * (this.healthyMessages.length));
    this.selectedMsg = this.healthyMessages[this.randomNumber]["message"];
    this.selectedIcon = this.healthyMessages[this.randomNumber]["icon"];
  }

}
