import { TestBed, ComponentFixture } from "@angular/core/testing"
import { HttpClientModule } from "@angular/common/http";

import { DoctorsComponent } from "./doctors.component";
import { DoctorService } from "./doctor.service";

describe( "Doctors component", () => {
    let fixture: ComponentFixture<DoctorsComponent>;
    let component: DoctorsComponent;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ DoctorsComponent ],
            providers:[ DoctorService ],
            imports: [ HttpClientModule ]
        });


        fixture = TestBed.createComponent( DoctorsComponent );
        component = fixture.componentInstance;
    })

    it('The component should be created correctly', () => {
        expect( component ).toBeTruthy();
    });

    it('should greet the doctor passed as an argument', () => {
        let res = component.greetDoctor( 'Mario' );
        expect( res ).toContain( 'Mario' );
    });

    it('should get doctors', () => {
        let doctors: any[];
        


    })
});