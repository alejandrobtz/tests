import { userLoggedIn } from "./booleans";

describe('boolean tests', () => {
    it('should return true', () => {
        const resp = userLoggedIn()
        expect( resp ).toBeTruthy();
    })
});