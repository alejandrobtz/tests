import { player } from "./classes"

describe('class test', () => {

    let  character  = new player();

    /*
        test's life cycle.

        beforeAll() => Before all test are executed, it happens once it starts the describe.
        beforeEach(); It's executed before each test execution. 
        afterAll(); => I'ts executed each time finishes one of the tests.
        afterEach(); => same before all, but is executed when all test are finished.
    */

    beforeEach(() => {
        character = new player();
    });

    it('should return 80 hp if receives 20 of damage', () => {
        const resp = character.receivesDamage(20);
        expect( resp ).toBe(80);
    });

    it('should return 50 hp if receives 50 of damage', () => {
        const resp = character.receivesDamage(50);
        expect( resp ).toBe(50);
    });

    it('should return 0 hp if receives more than 100 of damage', () => {
        const resp = character.receivesDamage(200);
        expect( resp ).toBe(0);
    });

});