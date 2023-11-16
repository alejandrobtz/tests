import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterDoctorComponent } from './router-doctor.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';


class FakeRouter {
	navigate(params:any) {
		console.log(params);
	}
}

class FakeActivatedRoute {
	params: Observable<any> = EMPTY;
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
		const router = TestBed.get(Router);
		const spy = spyOn(router, 'navigate');

		component.saveDoctor();

		expect( spy ).toHaveBeenCalledWith(['doctor', '123']);

	})

});
