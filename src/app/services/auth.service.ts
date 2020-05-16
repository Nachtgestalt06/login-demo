import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(form) {
    const url = `${environment.BASE_URL}/user/login`
    return this.http.post(url, form);
  }

  signUp(user) {
    const url = `${environment.BASE_URL}/user`
    console.log(user);
    return this.http.post(url, user);
  }
}
