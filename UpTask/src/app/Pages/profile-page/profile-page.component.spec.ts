import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageComponent } from './profile-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
      declarations: [ ProfilePageComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an avatar on profile page with class avatar', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.avatar');
    expect(el).toBeTruthy();
  });

  it('should display user name on profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.full-name');
    expect(el).toBeTruthy();
  });

  it('should display user email on profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.profile-email');
    expect(el).toBeTruthy();
  });

  it('should display user role on profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.profile-role');
    expect(el).toBeTruthy();
  });

  it('should display a sign out button on profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.s-out-btn');
    expect(el).toBeTruthy();
  });

  it('should display edit profile button on profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.edit-profile-btn');
    expect(el).toBeTruthy();
  });
});
