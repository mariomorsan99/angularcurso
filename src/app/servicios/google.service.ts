import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Usuarios } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  usuariosGoogle= new Usuarios("","");


  constructor(private router:Router, private socialAuthService:SocialAuthService) { 

   /*  this.socialAuthService.authState.subscribe((user)=>
    {
      this.usuariosGoogle.nombreUsuario=user.name;
      console.log(this.usuariosGoogle);
      
    })
 */

  }


  loginGoogle(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((users)=>{

      const {name, email}= users;


      localStorage.setItem('userGoogle',JSON.stringify(users));

      console.log(name+ email);
      
      this.router.navigate(['home', name]);


    })
  }


  logoutGoogle(){
    this.socialAuthService.signOut().then(() => this.router.navigate(['login']));
  }


}
