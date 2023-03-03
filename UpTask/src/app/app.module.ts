import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { SignupPageComponent } from 'src/app/Pages/signup-page/signup-page.component';
import { HomePageComponent } from 'src/app/Pages/home-page/home-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { EditProfilePageComponent } from './Pages/edit-profile-page/edit-profile-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TodayPageComponent } from './pages/today-page/today-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AddTaskPageComponent } from './Pages/add-task-page/add-task-page.component';
import { RandomMessageComponent } from './components/random-message/random-message.component';
import { ReminderAlertsComponent } from './components/reminder-alerts/reminder-alerts.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    LoadingSpinnerComponent,
    HomePageComponent,
    ProfilePageComponent,
    EditProfilePageComponent,
    MainPageComponent,
    TodayPageComponent,
    NavigationBarComponent,
    AddTaskPageComponent,
    RandomMessageComponent,
    ReminderAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
