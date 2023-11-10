import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [ NavbarComponent ],
		imports: [ RouterTestingModule.withRoutes([]) ]
		});
		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create NavbarComponent', () => {
		expect(component).toBeTruthy();
	});

	it('Should exist a routerlink to the doctors page', () => {
        const elements = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) )
		console.log({ elements });
        
        let exist = false;
        for(const element of elements) {
			console.log(element.attributes);
            exist = element.attributes['routerLink'] === '/doctors';
            break;
        }
        expect(exist).toBeTruthy();

    });

});
