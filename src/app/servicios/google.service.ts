import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private router:Router, private socialAuthService:SocialAuthService) { 

    this.socialAuthService.authState.subscribe((user)=>
    {
      console.log(user.email);
      console.log(user.name);
    })

  }


  loginGoogle(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(()=>{
      this.router.navigate(['home']);
    })
  }


  logoutGoogle(){
    this.socialAuthService.signOut().then(() => this.router.navigate(['login']));
  }


}
