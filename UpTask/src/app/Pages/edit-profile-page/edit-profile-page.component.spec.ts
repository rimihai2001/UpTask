import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePageComponent } from './edit-profile-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('EditProfilePageComponent', () => {
  let component: EditProfilePageComponent;
  let fixture: ComponentFixture<EditProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
      declarations: [ EditProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an avatar on edit profile page with class avatar', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.avatar');
    expect(el).toBeTruthy();
  });

  it('should display user name on edit profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.full-name');
    expect(el).toBeTruthy();
  });

  it('should display save edit profile button on edit profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.save-profile-btn');
    expect(el).toBeTruthy();
  });

  it('should display cancel edit profile button on edit profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.cancel-edit-btn');
    expect(el).toBeTruthy();
  });

  it('should display edit form on edit profile page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('#edit-profile-form');
    expect(el).toBeTruthy();
  });

  it('edit profile form should have name input', () => {
    const el = fixture.debugElement.nativeElement.querySelector('.name-input');
    expect(el).toBeTruthy();
  });

  it('edit profile form should role select option', () => {
    const el = fixture.debugElement.nativeElement.querySelector('.role-select');
    expect(el).toBeTruthy();
  });

  it('should mark role as valid when it has value', () => {
    const valoare = component.editForm.get('role');
    valoare.setValue('student');
    fixture.detectChanges();
    expect(valoare.valid).toBeTruthy();
  });

  it('should mark name as valid when it has value', () => {
    const valoare = component.editForm.get('name');
    valoare.setValue('Nume Test');
    fixture.detectChanges();
    expect(valoare.valid).toBeTruthy();
  });

  it('should mark name as invalid when it has no value', () => {
    const valoare = component.editForm.get('name');
    valoare.setValue(null);
    fixture.detectChanges();
    expect(valoare.invalid).toBeTruthy();
  });

  it('should mark role as invalid when it has no value', () => {
    const valoare = component.editForm.get('role');
    valoare.setValue(null);
    fixture.detectChanges();
    expect(valoare.invalid).toBeTruthy();
  });

});
