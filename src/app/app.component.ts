import { Component, OnInit } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';
import {  Producto } from '../app/components/models/gadget';

const  queryConsulta=gql`
query{
  productos{
    nombreProducto
    id
    descripcionProducto
  }
}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

   allGadgets:Producto[]=[];

    constructor( private apollo:Apollo){

    }

  ngOnInit(){

  console.log(queryConsulta)

   this.apollo.watchQuery<any>({
     query: queryConsulta
   }).valueChanges.subscribe(({data, loading}) => {
    console.log(loading);
    this.allGadgets = data;
   console.log(this.allGadgets);
  })

  }

}
