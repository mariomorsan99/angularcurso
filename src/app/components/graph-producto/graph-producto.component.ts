import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../servicios/graphql.service';
import { Producto  } from "../models/gadget";

@Component({
  selector: 'app-graph-producto',
  templateUrl: './graph-producto.component.html',
  styleUrls: ['./graph-producto.component.css']
})
export class GraphProductoComponent implements OnInit {

  products:any[]=[];


  constructor(private graphqlService:GraphqlService) { }

  ngOnInit(): void {
  this.getProductos();
  this.getProductosId();
  }

   getProductos(){
    this.products= this.graphqlService.getProductosGraphql();
    console.log(this.products);
   }

   getProductosId(){
    this.products= this.graphqlService.getProductosId(2);
    console.log(this.products);
   }

   setProducto(){
     this.graphqlService.createProducto("mate pad 10","matpad 10 pro");
   }



}
