import { increase } from "./numbers";

describe('number tests', () => {
    it('if number greater than 100 should return 100', () => {
        const res = increase(300);
        expect( res ).toBe(100);
    });

    it('if number lower than 100 should return number + 1', () => {
        const res = increase(50);
        expect( res ).toBe(51);
    });
})