import { message } from "./string";


describe('Strings tests', () => {

    it( 'should return a string', () => {
        const response = message('Alejandro');
        expect((typeof response )).toBe('string');
    });

    it( 'should return a greet with the name passed', () => {
        const name = 'Juan'
        const response = message(name);
        expect(( response )).toContain(name);
    });

});