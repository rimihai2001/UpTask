import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public profileDetails: ProfileInfo;
  public profileName: string;
  public profileRole: string;
  public profileEmail: string;
  public avatarURL: string;


  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.getStarted();
  }
 
  //Function to get user profile info and use it for the avatar and display
  async getStarted() {
    var details: string[];
    details = [];
    await this.getDetails().then((value) => {
      details = value as string[];
    });

    try {
      this.profileEmail = (await this.afAuth.currentUser).email;
    } catch { }

    if (details.length >= 2) {
      this.profileName = details[0];
      this.profileRole = details[1];
      this.profileRole = this.profileRole[0].toUpperCase() + this.profileRole.slice(1);
      let names = this.profileName.split(" ");
      if (names.length > 1) {
        this.avatarURL = "https://ui-avatars.com/api/?name=" + names[0] + "+" + names[names.length - 1] + "&background=6112E1&color=fff";
      } else {
        this.avatarURL = "https://ui-avatars.com/api/?name=" + names[0] + "&background=6112E1&color=fff&uppercase=false";
      }
    }
  }


  //Function to fetch user info from the database
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

  //Function for logout
  logout(): void {
    this.afAuth.signOut();
    localStorage.removeItem("user");
  }

  //Router navigate functions
  switchToEdit() {
    this.router.navigate(['./profile/edit']);
  }

  goToMainPage() {
    this.router.navigate(['./main']);
  }
}

class ProfileInfo {
  fullName: string;
  role: string;
}
