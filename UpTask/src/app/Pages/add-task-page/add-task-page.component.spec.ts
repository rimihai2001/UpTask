import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskPageComponent } from './add-task-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AddTaskPageComponent', () => {
  let component: AddTaskPageComponent;
  let fixture: ComponentFixture<AddTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
      declarations: [AddTaskPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a name input', () => {

    const el = fixture.debugElement.nativeElement.querySelector('.name-input');
    expect(el).toBeTruthy();
  });

  it('should have a description input', () => {

    const el = fixture.debugElement.nativeElement.querySelector('.text-area');

    expect(el).toBeTruthy();
  });

  it('should have a label input', () => {

    const el = fixture.debugElement.nativeElement.querySelector('.label-input');
    expect(el).toBeTruthy();
  });

  it('should have a date input', () => {

    const el = fixture.debugElement.nativeElement.querySelector('.date');
    expect(el).toBeTruthy();
  });

  it('should have a add task form', () => {

    const el = fixture.debugElement.nativeElement.querySelector('#add-task-form');
    expect(el).toBeTruthy();
  });

  it('should have a add task form button', () => {

    const el = fixture.debugElement.nativeElement.querySelector('.save-task-btn');
    expect(el).toBeTruthy();
  });

  it('should mark task name as invalid when it has no value', () => {
    // Arrange
    const valoare = component.addTaskForm.get('taskName');

    // Act
    valoare.setValue(null);
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });

  it('should mark task description as invalid when it has no value', () => {
    // Arrange
    const valoare = component.addTaskForm.get('taskDescription');

    // Act
    valoare.setValue(null);
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });

  it('should mark task label as invalid when it has no value', () => {
    // Arrange
    const valoare = component.addTaskForm.get('label');

    // Act
    valoare.setValue(null);
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });

  it('should mark task date as valid when it has a value', () => {
    // Arrange
    const valoare = component.addTaskForm.get('taskDeadline');

    // Act
    valoare.setValue(null);
    fixture.detectChanges();

    // Assert
    expect(valoare.invalid).toBeTruthy();
  });


  it('should mark task name as valid when it has a value', () => {
    // Arrange
    const valoare = component.addTaskForm.get('taskName');

    // Act
    valoare.setValue('test nume');
    fixture.detectChanges();

    // Assert
    expect(valoare.valid).toBeTruthy();
  });

  it('should mark task description as valid when it has a value', () => {
    // Arrange
    const valoare = component.addTaskForm.get('taskDescription');

    // Act
    valoare.setValue("Test descriere");
    fixture.detectChanges();

    // Assert
    expect(valoare.valid).toBeTruthy();
  });

  it('should mark task label as valid when it has a value', () => {
    // Arrange
    const valoare = component.addTaskForm.get('label');

    // Act
    valoare.setValue("school");
    fixture.detectChanges();

    // Assert
    expect(valoare.valid).toBeTruthy();
  });

  it('should mark task date as valid when it has a value', () => {
    // Arrange
    const valoare = component.addTaskForm.get('taskDeadline');

    // Act
    valoare.setValue("12/2/2023");
    fixture.detectChanges();

    // Assert
    expect(valoare.valid).toBeTruthy();
  });

});
