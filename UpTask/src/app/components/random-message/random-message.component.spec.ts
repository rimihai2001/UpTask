import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMessageComponent } from './random-message.component';

describe('RandomMessageComponent', () => {
  let component: RandomMessageComponent;
  let fixture: ComponentFixture<RandomMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
