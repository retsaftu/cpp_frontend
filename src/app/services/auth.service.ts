import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postSocialLogin(socialDate: UserModel){
    return this.http.post("http://localhost:8000/auth/google", socialDate);
  }

  isAuthenticated(): Boolean{
    let userInfo = localStorage.getItem('userInfo');
    return (userInfo && JSON.parse(userInfo));
  }

  setUser(userInfo: UserModel){
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

}
