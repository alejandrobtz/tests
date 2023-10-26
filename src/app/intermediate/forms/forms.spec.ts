import { RegisterForm } from "./forms";
import { FormBuilder } from "@angular/forms"


describe('Form ', () => {
    let component: RegisterForm;

    beforeEach(() => {
        component = new RegisterForm( new FormBuilder() );
    });

    it('Should create a form with 2 fields, email and password', () => {
        expect( component.form.contains('email')).toBeTruthy();
        expect( component.form.contains('password')).toBeTruthy();
    });

    //Validate how to make async tests
    it('Should have a valid email'), async () => {
        let control = component.form.get('email');
        control?.setValue('juan@');

        await expect(control?.valid).toBeTruthy();

    }

});