import { EMPTY, from, throwError } from 'rxjs';
import { DoctorsComponent } from './doctors.component';
import { DoctorsService } from './doctors.service';
import { HttpClient } from '@angular/common/http'



describe('DoctorsComponent', () => {

    let component: DoctorsComponent;
    const service: DoctorsService = new DoctorsService(null as unknown as HttpClient);

    beforeEach( () => {
        component = new DoctorsComponent(service);
    });


    it('OnInit should load doctors', () => {
        const doctors = ['doctor1', 'doctor2', 'doctor3']

        spyOn( service, 'getDoctors' ).and.callFake( () => {
            return from(doctors);
        });
        

        component.ngOnInit()
        expect(component.doctors.length).toBeGreaterThan(0);
    });

    it("should make a request to the server for adding a doctor", () => {
        const spy = spyOn(service, 'addDoctor').and.callFake((doc) => {
            return EMPTY;
        });

        component.addDoctor();
        expect(spy).toHaveBeenCalled();
    });

    it("should add a new doctor to the doctor array",  () => {
        const doctor = { id: 1, name: 'Juan Carlos' };

        spyOn(service, 'addDoctor').and.returnValue( from( [ doctor ] ) );
        
        component.addDoctor();
        expect(component.doctors.indexOf( doctor )).toBeGreaterThanOrEqual(0);
    });

    it("If fails the errorMessage property must be the same.", () => {
        const errorMessage = 'We were unable to add the new doctor.'

        spyOn(service, 'addDoctor').and.returnValue(throwError(() => errorMessage));
        component.addDoctor();

        expect(component.errorMessage ).toBe(errorMessage);

    });

    it("should make a call to delete doctor component", () => {

        spyOn(window, 'confirm').and.returnValue(true);
        let spy = spyOn(service, 'deleteDoctor').and.callFake(() => EMPTY);
        component.deleteDoctor("23")
        expect(spy).toHaveBeenCalled();
    });

    it("should not make a call to delete doctor component", () => {

        spyOn(window, 'confirm').and.returnValue(false);
        let spy = spyOn(service, 'deleteDoctor').and.callFake(() => EMPTY);
        component.deleteDoctor("23")
        expect(spy).not.toHaveBeenCalled();
    });
});
