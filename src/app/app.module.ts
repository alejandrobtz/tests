import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './intermediate/spies/doctors.component';
import { DoctorService } from './intermediate2/doctors/doctor.service';
import { HospitalsComponent } from './intermediate2/hospitals/hospitals/hospitals.component';
import { IncreaserComponent } from './intermediate2/increaser/increaser.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './advanced/routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    HospitalsComponent,
    IncreaserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ DoctorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
