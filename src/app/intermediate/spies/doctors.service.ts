import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable()
export class DoctorsService {

  constructor( public httpClient: HttpClient) { }

  getDoctors() {
    return this.httpClient.get('...').pipe(
      map( (resp: any) => resp['doctors'])
    );
  }

  addDoctor( doctor: any ) {
    return this.httpClient.post('...', doctor ).pipe(
      map( (resp: any) => resp['doctor'] )
    );
  }

  deleteDoctor( id: string ) {
    return this.httpClient.delete('...' ).pipe(
      map( (resp:any) => resp['doctor'] )
    );
  }


}
