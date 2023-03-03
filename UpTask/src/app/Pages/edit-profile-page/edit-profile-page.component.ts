import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss'],
})
export class EditProfilePageComponent implements OnInit {
  public profileEmail: string;
  public profileName: string;
  public profileRole: string;
  public avatarURL: string;
  editForm!: FormGroup;
  public vld: Boolean;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getStarted();
    
    //Form initialization
    this.editForm = new FormGroup({
      name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
    this.vld = true;
  }

  //Function to get user profile info and update the form with actual data
  async getStarted() {
    var details: string[];
    details = [];
    await this.getDetails().then((value) => {
      details = value as string[];
    });

    //Update the form with already selected data and create the avatar
    if (details.length >= 2) {
      this.profileName = details[0];
      this.profileRole = details[1];
      this.editForm = new FormGroup({
        name: new FormControl(this.profileName, Validators.required),
        role: new FormControl(this.profileRole, Validators.required),
      });
      this.profileRole = this.profileRole[0].toUpperCase() + this.profileRole.slice(1);
      let names = this.profileName.split(" ");
      if (names.length > 1) {
        this.avatarURL = "https://ui-avatars.com/api/?name=" + names[0] + "+" + names[names.length - 1] + "&background=6112E1&color=fff";
      } else {
        this.avatarURL = "https://ui-avatars.com/api/?name=" + names[0] + "&background=6112E1&color=fff&uppercase=false";
      }
    }
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

  //Function that updates the profile data
  editProfile() {
    if (this.editForm.valid) {
      this.vld = true;
      var editformData = {
        name: this.editForm.value.name,
        role: this.editForm.value.role,
      };
      let username = localStorage.getItem('user');
      this.db.object('users/' + username + '/info').set(editformData);
      this.snackBar.open("Profile Updated", "OK", { duration: 3000 });
      this.router.navigate(['./profile']);
    } else {
      this.vld = false;
      return;
    }
  }
}
