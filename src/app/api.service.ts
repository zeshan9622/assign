import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http:HttpClient) { }

  // generateToken() {
  //   return this.http.post(`${this.baseurl}`,'auth/oauth/token')
  // }
  getUser(){
    return this.http.get(`${environment.baseUrl}`)
  }

}
