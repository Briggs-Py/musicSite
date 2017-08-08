import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
import 'rxjs'

@Injectable()
export class MusicAppService {

  constructor(private _http: Http) { }

  allEvents(){
    return this._http.get('/api/allEvents')
    .map( (response:Response)=>response.json() )
    .toPromise()
  }
}
