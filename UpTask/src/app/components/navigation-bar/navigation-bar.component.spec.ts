import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
      declarations: [ NavigationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Go To Main Page', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.go-to-main-page-navbar');
    expect(el).toBeTruthy();
  });

  it('should have a Go To Today Tasks', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.go-to-today-tasks-navbar');
    expect(el).toBeTruthy();
  });

  it('should have a Add Task', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.add-task-navbar');
    expect(el).toBeTruthy();
  });

  it('should have a Logout Button', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.logout');
    expect(el).toBeTruthy();
  });

  it('should have an Avatar', () => {
    
    const el = fixture.debugElement.nativeElement.querySelector('.avatar');
    expect(el).toBeTruthy();
  });

});
