import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

    let fixture : ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(() => {

       TestBed.configureTestingModule({
        declarations:[ AppComponent ],
        imports: [ RouterTestingModule.withRoutes([]) ],
		schemas:[ NO_ERRORS_SCHEMA ]
       });
       fixture = TestBed.createComponent(AppComponent);
       component = fixture.componentInstance;
    });

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	
    it('Should have a router-outlet.', () => {
        const debugElement = fixture.debugElement.query( By.directive( RouterOutlet ) );
        expect( debugElement ).not.toBeNull();
    });


});
