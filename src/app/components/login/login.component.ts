import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { GoogleService } from '../../servicios/google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private socialAuthService:SocialAuthService, private googleService:GoogleService) { }

  ngOnInit(): void {
  }

  login(){

  this.googleService.loginGoogle();


 // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(()=>{
  //  this.router.navigate(['home']);
  //})


  }
   

}
