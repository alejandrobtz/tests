import { getRobots } from "./arrays";

describe('Arrays tests', () => {
    it('should return at least 3 robots', () => {
        const res = getRobots();
        expect( res.length ).toBeGreaterThanOrEqual(3);
    });

    it('Should contain Megaman and Ultron', () => {
        const res = getRobots();
        expect( res ).toContain('Megaman');
        expect( res ).toContain('Ultron');
    });

});