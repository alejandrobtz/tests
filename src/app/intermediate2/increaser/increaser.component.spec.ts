import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncreaserComponent } from './increaser.component';
import { FormsModule } from '@angular/forms';


describe('Increaser Component Test', () => {

    let component: IncreaserComponent;
    let fixture: ComponentFixture<IncreaserComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncreaserComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncreaserComponent);
        component = fixture.componentInstance;

    });

    it('', () => {


    });

});
