import { DoctorsComponent } from "src/app/intermediate2/doctors/doctors.component"
import { ROUTES } from "./app.routes"

describe('main routes', () => {
    it('should exist the route doctor/:id', () => {
        expect(ROUTES).toContain({ 
            path:'doctor/:id',
            component: DoctorsComponent
        });
    });
});