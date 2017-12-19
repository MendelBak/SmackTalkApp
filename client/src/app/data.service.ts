import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  addUser(newUser){
    return this._http.post('/api/registerUser', newUser)
    .map(data => data.json())
    .toPromise();
  }


  login(user){
    return this._http.post('/api/loginUser', user)
    .map(data => data.json())
    .toPromise();
  }
}
