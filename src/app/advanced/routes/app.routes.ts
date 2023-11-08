import { Routes } from '@angular/router';
import { DoctorsComponent } from 'src/app/intermediate2/doctors/doctors.component';
import { HospitalsComponent } from 'src/app/intermediate2/hospitals/hospitals/hospitals.component';
import { IncreaserComponent } from 'src/app/intermediate2/increaser/increaser.component';


export const ROUTES: Routes = [
    { path: 'hospital', component: HospitalsComponent },
    { path: 'doctor/:id', component: DoctorsComponent },
    { path: '**', component: IncreaserComponent }
]