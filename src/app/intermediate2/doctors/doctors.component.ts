import { Component } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: [
  ]
})
export class DoctorsComponent {

  constructor(public doctorsService: DoctorService) {

  }

  public doctors: any[] = [];

  greetDoctor(name: string): string {
    return `Hello dear dr. ${ name }`;
  }

  getDoctors() {
    this.doctorsService.getDoctors().subscribe( (doctors: any )=> this.doctors = doctors );
  }

}
