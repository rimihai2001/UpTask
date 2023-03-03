import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderAlertsComponent } from './reminder-alerts.component';

describe('ReminderAlertsComponent', () => {
  let component: ReminderAlertsComponent;
  let fixture: ComponentFixture<ReminderAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
