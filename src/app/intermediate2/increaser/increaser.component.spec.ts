import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncreaserComponent } from './increaser.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


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

    it('should show the "Leyenda"', () => {
        component.leyenda = 'Loading progress';
        fixture.detectChanges();  //trigger change detection

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        expect(elem.innerHTML).toContain('Loading progress');

    });

    it('Should show in the input element the progress value', () => {

        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable().then( () => {
            const input: DebugElement = fixture.debugElement.query( By.css('input') );
            const element: any = input.nativeElement;
    
            expect(element.value).toBe('55');
        });
    });

    it('should increase / decrease in 5, when clicking a button. ', () => {

        let buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.btn-primary'));
        let decreaseBtn = buttons[0]; //we already know in the HTML the 1st one is for decreasing.
        let increaseBtn = buttons[1];

        decreaseBtn.triggerEventHandler('click')
        expect(component.progreso).toBe(45);
        
        increaseBtn.triggerEventHandler('click')
        expect(component.progreso).toBe(50);
    });

    it('html should reflects a change of the binded variable "progreso" when clicking', () => {
        let decreaseBtn: DebugElement = fixture.debugElement.queryAll(By.css('.btn-primary'))[0];
        decreaseBtn.triggerEventHandler('click')
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        expect(elem.innerHTML).toContain('45');
    });

});
