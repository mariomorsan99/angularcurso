import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { map } from 'rxjs/operators';
import { GoogleService } from '../../servicios/google.service';
import { Usuarios } from 'src/app/model/usuario';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public usuario=new Usuarios("","");
  userGoogle:any
  nombreUsuario=''
  email=''

  constructor(private router:Router,public socialAuthServive: SocialAuthService, private googleService:GoogleService, activate: ActivatedRoute) {

     activate.params.subscribe(result=>{

      console.log(result['name']);
     })


     this.userGoogle=   localStorage.getItem('userGoogle');

     console.log(this.userGoogle)

      const{name , email }= JSON.parse(this.userGoogle);
      
   
     this.nombreUsuario=name
     this.email=email
    console.log(this.nombreUsuario);
     
    
   }

  

  ngOnInit(): void {

  }






  logout(): void {
    this.googleService.logoutGoogle();
    //this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }
}
