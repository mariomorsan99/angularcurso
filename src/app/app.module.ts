import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaderComponent } from './components/header/hader/hader.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { ProductosService } from './servicios/productos.service';
import { Tecnologia2Component } from './components/tecnologia2/tecnologia2.component';

import { ItemProductoComponent } from './components/item-producto/item-producto.component';
import { LoginComponent } from './components/login/login.component';
//google
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AuthGuard } from './auth.guard';
import { TiendaService } from './servicios/tienda.service';

import { HttpClientModule  } from "@angular/common/http";
import { GraphQLModule } from './graphql.module';
import { GraphProductoComponent } from './components/graph-producto/graph-producto.component';
import { GraphqlService } from './servicios/graphql.service';

//apollo

@NgModule({
  declarations: [
    AppComponent,
    HaderComponent,
    FooterComponent,
    HomeComponent,
    TecnologiaComponent,
    Tecnologia2Component,
    ItemProductoComponent, LoginComponent, GraphProductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('865808430601-t1oejdpt2de1uapp48klvgfj5ctc271t.apps.googleusercontent.com') // your client id
          }
        ]
      }
    },

    ProductosService,TiendaService, AuthGuard, GraphqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
