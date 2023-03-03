import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	constructor(public afAuth: AngularFireAuth) {
	}

	ngOnInit(): void {
	}
}
