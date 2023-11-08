import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { ROUTES } from './advanced/routes/app.routes';

describe('AppComponent', () => {
	beforeEach(() => TestBed.configureTestingModule({
		declarations: [AppComponent],
		imports: [
			RouterTestingModule.withRoutes(ROUTES)
		]
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'tests'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('tests');
	});

});
