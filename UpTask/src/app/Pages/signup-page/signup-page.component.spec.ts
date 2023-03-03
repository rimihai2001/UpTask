import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPageComponent } from './signup-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const validUserSignup = {
  name: 'Test X',
  email: 'test@test.com',
  password: 'Parola12345',
  role: 'student',
};

describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;

  function updateForm(userName, userEmail, userPassword, userRole) {
    fixture.componentInstance.signupForm.controls['name'].setValue(userName);
    fixture.componentInstance.signupForm.controls['email'].setValue(userEmail);
    fixture.componentInstance.signupForm.controls['password'].setValue(
      userPassword
    );
    fixture.componentInstance.signupForm.controls['role'].setValue(userRole);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
      ],
      declarations: [SignupPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with id signup-form', () => {
    // Arrange & Assert
    const el = fixture.debugElement.nativeElement.querySelector('form');
    expect(el).toBeTruthy();
  });
  it('should call the onSubmit method when the signup-form is submitted', () => {
    // Arrange
    const fnc = spyOn(component, 'onSubmit');

    updateForm(
      validUserSignup.name,
      validUserSignup.email,
      validUserSignup.password,
      validUserSignup.role
    );

    fixture.detectChanges();

    const btnEl = fixture.debugElement.nativeElement.querySelector('.sgn-btn');

    // Act
    btnEl.click();
    fixture.detectChanges();

    // Assert
    expect(fnc).toHaveBeenCalled();
  });

  it('should have a button inside the signup-form', () => {
    // Arrange & Assert
    const el = fixture.debugElement.nativeElement.querySelector('.sgn-btn');
    expect(el).toBeTruthy();
    expect(el.getAttribute('type')).toEqual('submit');
  });
  it('should display Sign me up on the submit button', () => {
    // Arrange & Assert
    const el = fixture.debugElement.nativeElement.querySelector('.sgn-btn');
    expect(el.innerText).toEqual('Sign me up');
  });

  it('should submit the form when the submit button is clicked', () => {
    updateForm(
      validUserSignup.name,
      "email@test.com",
      validUserSignup.password,
      validUserSignup.role
    );

    fixture.detectChanges();

    // Arrange
    const btnEl = fixture.debugElement.nativeElement.querySelector('.sgn-btn');

    // Act
    btnEl.click();
    fixture.detectChanges();

    // Assert
    expect(component.displayValidationMessage).toBeFalsy();
  });

  it('should mark name as invalid when it has no value', () => {
    // Arrange
    const valoare = component.signupForm.get('name');

    // Act
    valoare.setValue(null);
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });
  it('should mark name as valid when it has value', () => {
    const valoare = component.signupForm.get('name');
    valoare.setValue('test');
    fixture.detectChanges();

    expect(valoare.valid).toBeTruthy();
  });

  it('should mark password as invalid when it has no value', () => {
    // Arrange
    const valoare = component.signupForm.get('password');

    // Act
    valoare.setValue(null);
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });

  it('should mark password as invalid when its value is less than 6 characters', () => {
    // Arrange
    const valoare = component.signupForm.get('password');

    // Act
    valoare.setValue('1234');
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });

  it('should mark password as valid when its value is longer than 6 character, has one lowercase letter, one uppercase letter and a number', () => {
    // Arrange
    const valoare = component.signupForm.get('password');

    // Act
    valoare.setValue('Parola123456789');
    fixture.detectChanges();

    // Assert
    expect(valoare.valid).toBeTruthy();
  });

  it('should mark email as invalid when it has no value', () => {
    // Arrange
    const valoare = component.signupForm.get('email');

    // Act
    valoare.setValue(null);
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });
  it('should mark email as valid when it has value', () => {
    // Arrange
    const valoare = component.signupForm.get('email');

    // Act
    valoare.setValue('test@test.com');
    fixture.detectChanges();

    // Assert
    expect(valoare.valid).toBeTruthy();
  });

  it('should mark role as invalid when it has no value', () => {
    // Arrange
    const valoare = component.signupForm.get('role');

    // Act
    valoare.setValue(null);
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });

  it('should mark role as valid when it has value', () => {
    // Arrange
    const valoare = component.signupForm.get('role');

    // Act
    valoare.setValue('student');
    fixture.detectChanges();

    // Assert
    expect(valoare.valid).toBeTruthy();
  });

  it('should have an input element for the name ', () => {
    // Arrange & Assert
    const el = fixture.debugElement.nativeElement.querySelector('.name-input');
    expect(el).toBeTruthy();
    expect(el.getAttribute('placeholder')).toEqual('Name');
  });

  it('should bind the name to its FormControl', () => {
    // Arrange
    //const el = fixture.debugElement.nativeElement.querySelector('.name-input');
    //const ctrl = component.signupForm.get('name');

    // Act
    const dummyValue = '123';

    fixture.componentInstance.signupForm.controls['name'].setValue(dummyValue);
    const ctrl = component.signupForm.get('name');

    fixture.detectChanges();

    // Act
    expect(ctrl.value).toEqual(dummyValue);
  });
});
