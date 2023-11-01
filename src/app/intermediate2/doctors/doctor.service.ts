import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( public http: HttpClient ) { }

  getDoctors() {
    return this.http.get('...');
  }
}
