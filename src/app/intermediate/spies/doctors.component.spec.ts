import { from } from 'rxjs';
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

});
