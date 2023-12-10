import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterDoctorComponent } from './router-doctor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';


class FakeRouter {
	navigate(params:any) {
		console.log(params);
	}
}

class FakeActivatedRoute {
	//params: Observable<any> = EMPTY;
	private subject = new Subject();
	push( value: any ) {
		this.subject.next( value );
	}

	get params() {
		return this.subject.asObservable();
	}
}

describe('RouterDoctorComponent', () => {
	let component: RouterDoctorComponent;
	let fixture: ComponentFixture<RouterDoctorComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [RouterDoctorComponent],
		providers:[  { provide: Router, useClass: FakeRouter}, { provide: ActivatedRoute, useClass: FakeActivatedRoute} ]
		});
		fixture = TestBed.createComponent(RouterDoctorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});


	it('Must redirect to doctor when is saved', () => {
		const router = TestBed.inject(Router);
		const spy = spyOn(router, 'navigate');

		component.saveDoctor();

		expect( spy ).toHaveBeenCalledWith(['doctor', '123']);

	});

	it( 'should add the id === new', () => {
		component = fixture.componentInstance;

		const activatedRoute = TestBed.inject(ActivatedRoute) as unknown as FakeActivatedRoute; //typed as any for avoiding compilation errors.

		activatedRoute.push({ id:'new' });

		expect( component.id ).toBe('new');


	});

});
