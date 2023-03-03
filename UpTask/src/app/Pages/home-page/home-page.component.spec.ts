import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
	let component: HomePageComponent;
	let fixture: ComponentFixture<HomePageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
			declarations: [HomePageComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('created a signup button', () => {
		// const fixture = TestBed.createComponent(LoginComponent);
		const loginPageContainer = fixture.debugElement.nativeElement.querySelector('.signup-button');
		expect(loginPageContainer).toBeDefined();
	  });

	  it('created a login button', () => {
		// const fixture = TestBed.createComponent(LoginComponent);
		const loginPageContainer = fixture.debugElement.nativeElement.querySelector('.login-button');
		expect(loginPageContainer).toBeDefined();
	  });

	  it('created a page title', () => {
		// const fixture = TestBed.createComponent(LoginComponent);
		const loginPageContainer = fixture.debugElement.nativeElement.querySelector('.title');
		expect(loginPageContainer).toBeDefined();
	  });

	  it('created a page subtitle', () => {
		// const fixture = TestBed.createComponent(LoginComponent);
		const loginPageContainer = fixture.debugElement.nativeElement.querySelector('.subtitle');
		expect(loginPageContainer).toBeDefined();
	  });

	  it('created a container for the buttons', () => {
		// const fixture = TestBed.createComponent(LoginComponent);
		const loginPageContainer = fixture.debugElement.nativeElement.querySelector('.buttons-container');
		expect(loginPageContainer).toBeDefined();
	  });

	  it('should display Log into your account on the login button', () => {
		// Arrange & Assert
		const el = fixture.debugElement.nativeElement.querySelector('.login-button');
		expect(el.innerText).toEqual('Log into your account');
	  });

	  it('should display Create your account on the sign-up button', () => {
		// Arrange & Assert
		const el = fixture.debugElement.nativeElement.querySelector('.signup-button');
		expect(el.innerText).toEqual('Create your account');
	  });

});
