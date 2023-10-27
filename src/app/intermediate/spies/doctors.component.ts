import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';

@Component({
  selector: 'app-medicos',
  template: `
    <p>
      medicos works!
    </p>
  `,
  styles: []
})
export class DoctorsComponent implements OnInit {

  public doctors: any[] = [];
  public errorMessage: string = '';

  constructor( public _medicoService: DoctorsService ) { }

  ngOnInit() {
    this._medicoService.getDoctors()
    .subscribe( (doctors:any) => this.doctors = doctors );
  }

  addDoctor() {
    const doctor = { id: 1,  name: 'Juan Carlos' };

    this._medicoService.addDoctor(doctor)
          .subscribe( {
            next: (doctorDb) => this.doctors.push(doctorDb),
            error: err => this.errorMessage = err
          });
  }

  deleteDoctor(id: string) {
    const confirmation = confirm('Are you sure you want to delete this doctor ?');

    if ( confirmation ) {
      this._medicoService.deleteDoctor( id );
    }

  }

}
