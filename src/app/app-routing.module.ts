import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { Tecnologia2Component } from './components/tecnologia2/tecnologia2.component';
import { ItemProductoComponent } from './components/item-producto/item-producto.component';
import { LoginComponent } from './components/login/login.component';
import { GraphProductoComponent } from './components/graph-producto/graph-producto.component';

const routes: Routes = [
  { path: 'home/:name', component: HomeComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'tecnologia2', component: Tecnologia2Component },
  { path: 'itemProducto/:id', component: ItemProductoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'producto', component: GraphProductoComponent },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
