import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser  } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  constructor(private http: HttpClient,private socialAuthService: SocialAuthService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let userInfo = localStorage.getItem("userInfo");
    if(userInfo && JSON.parse(userInfo) != {}){
      this.router.navigate(['home']);
    }
  }

  register(user:any){
    console.log(user);
    console.log(environment.serverURL + '/auth/register/');
    console.log(this.http.get(environment.serverURL + '/auth/register/'));

    const current_user = this.http.post(environment.serverURL + '/auth/register/',user);
      current_user.subscribe((result: any) => {
      console.log(result);
      this.authService.setUser({userId: user.id, username: user.name});
      this.router.navigate(['home']);
      
    })
    
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // this.socialAuthService.authState.subscribe((user) => {
    //   console.log(user);
    //   this.authService.setUser({userId: user.id, username: user.name});
    //   this.router.navigate(['home']);
    // });
  }
  login(user:any){
    console.log(user);
    const current_user = this.http.post(environment.serverURL + '/auth/login/',user);
      current_user.subscribe((result: any) => {
      console.log(result);
      if(result){
        this.authService.setUser({userId: result._id, username: result.name});
        this.router.navigate(['home']);
        // localStorage.setItem('userInfo', JSON.stringify({userId: user.id, username: user.name}));
        let userInfo = localStorage.getItem('userInfo');
        
        console.log(userInfo);
        
      }
      
      
    })
  
  }

}
