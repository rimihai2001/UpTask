import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPageComponent } from './today-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { DateAdapter } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('TodayPageComponent', () => {
  let component: TodayPageComponent;
  let fixture: ComponentFixture<TodayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }, DateAdapter],
      declarations: [TodayPageComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TodayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('created School task list', () => {
		const schoolContainer = fixture.debugElement.nativeElement.querySelector('.school');
		expect(schoolContainer).toBeDefined();
	});

  it('Display Msg when there are no school tasks', () => {
      const contiainerMsg = fixture.debugElement.nativeElement.querySelector('.school-zero-tasks');
      expect(contiainerMsg).toBeDefined();
      expect(contiainerMsg.innerHTML).toContain('Looks like you finished all your today\'s tasks for school. Do you want to add another one?');
  });

  it('If there are no school tasks add task "+" image should be present', () => {
    const notaskImg = fixture.debugElement.nativeElement.querySelector('.school-task-button');
    expect(notaskImg).toBeDefined();
  });

  it('Task card should be created', () => {
    const taskContainer = fixture.debugElement.nativeElement.querySelector('.task-card');
		expect(taskContainer).toBeDefined();
});

it('Task card should contain task name', () => {
  const nameContainer = fixture.debugElement.nativeElement.querySelector('.task-name');
  expect(nameContainer).toBeDefined();
});


it('Task Card ViewMode image Should be visible', () => {
  const viewmodeBtn = fixture.debugElement.nativeElement.querySelector('.eye-icon');
  expect(viewmodeBtn).toBeDefined();
});

it('Task card should have task completed button', () => {
  const completedBtn = fixture.debugElement.nativeElement.querySelector('.completed-button');
  expect(completedBtn).toBeDefined();
});


it('Task card should have task unfinished button', () => {
  const unfinishedBtn = fixture.debugElement.nativeElement.querySelector('.unfinished-button');
  expect(unfinishedBtn).toBeDefined();
});


  it('Task card should have task delete button', () => {
    const deleteBtn = fixture.debugElement.nativeElement.querySelector('.delete-button');
    expect(deleteBtn).toBeDefined();
  });



  
    it('created Work task list', () => {
      const workContainer = fixture.debugElement.nativeElement.querySelector('.work');
      expect(workContainer).toBeDefined();
    });
  
    it('Display Msg when there are no work tasks', () => {
      const contiainerMsg = fixture.debugElement.nativeElement.querySelector('.work-zero-tasks');
      expect(contiainerMsg).toBeDefined();
      expect(contiainerMsg.innerHTML).toContain('Looks like you finished all your today\'s tasks for work. Do you want to add another one?');
    });
  
    it('If there are no work tasks add task "+" image should be present', () => {
      const notaskImg = fixture.debugElement.nativeElement.querySelector('.work-task-button');
      expect(notaskImg).toBeDefined();
    });
  
  
    it('created Other task list', () => {
      const otherContainer = fixture.debugElement.nativeElement.querySelector('.other');
      expect(otherContainer).toBeDefined();
    });
  
    it('Display Msg when there are no other tasks', () => {
      const contiainerMsg = fixture.debugElement.nativeElement.querySelector('.other-zero-tasks');
      expect(contiainerMsg).toBeDefined();
      expect(contiainerMsg.innerHTML).toContain('Looks like you finished all your today\'s tasks for other activities. Do you want to add another one?');
    });
  
    it('If there are no other activities tasks add task "+" image should be present', () => {
      const notaskImg = fixture.debugElement.nativeElement.querySelector('.other-task-button');
      expect(notaskImg).toBeDefined();
    });

});
