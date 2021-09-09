import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { map } from 'rxjs/operators';
import { GoogleService } from '../../servicios/google.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,public socialAuthServive: SocialAuthService, private googleService:GoogleService) {

     

   }

  

  ngOnInit(): void {
  }





  logout(): void {
    this.googleService.logoutGoogle();
    //this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }
}
