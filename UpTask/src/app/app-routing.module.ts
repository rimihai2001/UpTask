import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskPageComponent } from 'src/app/Pages/add-task-page/add-task-page.component';
import { HomePageComponent } from 'src/app/Pages/home-page/home-page.component';
import { EditProfilePageComponent } from './Pages/edit-profile-page/edit-profile-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { TodayPageComponent } from './pages/today-page/today-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'profile/edit', component: EditProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'today', component: TodayPageComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddTaskPageComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
