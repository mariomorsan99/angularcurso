import { Component, OnChanges, OnInit } from '@angular/core';
import { GraphqlService } from '../../servicios/graphql.service';
import { Producto, ProductoModel } from '../models/gadget';
import { gql,Apollo } from "apollo-angular";
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2'


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
  selector: 'app-graph-producto',
  templateUrl: './graph-producto.component.html',
  styleUrls: ['./graph-producto.component.css']
})
export class GraphProductoComponent implements OnInit, OnChanges {

  products:Array<any>
  loading:boolean;

  productoModel:ProductoModel= new ProductoModel();


  setDefault(myForm: NgForm){
    myForm.resetForm({
      nombre: 'mate pad',
      descripcion: 'matepad'
    })
  }

  resetFormValue(myForm: NgForm){
    myForm.resetForm()
  }


  constructor(private graphqlService:GraphqlService,private apollo:Apollo) {
    this.products= [];
    console.log( this.products);
    this.loading=false;
    console.log(this.loading)
    this.getProductos();
    console.log("constr")
   }

  ngOnInit(): void {
    console.log("on init")
    this.getProductos();
  }

  ngOnChanges(){
    console.log("changes")
    this.getProductos();
  }

   getProductos():any{
    this.apollo.watchQuery<any>({
      query: queryConsulta
  }).valueChanges
  .subscribe(({data, loading}) => {
    this.loading = loading;
    this.products = data.productos
    this.loading=true;
    console.log(this.loading);
    console.log(this.products);
    localStorage.setItem("productos",JSON.stringify(this.products));
    return this.products;
  })
   }

   getProductosId(){
    this.products= this.graphqlService.getProductosId(2);
    console.log(this.products);
   }

   setProducto(producto: ProductoModel){
     console.log(producto.nombre);
     console.log(producto.descripcion);
     this.graphqlService.createProducto(producto.nombre,producto.descripcion);
     Swal.fire('se agrego un nuevo producto');
     this.RecargarPagina();
   }

   editProducto(producto: ProductoModel ){
     console.log(producto);
     this.graphqlService.alterProduct(producto.nombre, producto.descripcion, producto.id);
     this.RecargarPagina();
   }

   deleteProducto(producto: ProductoModel){
     console.log(producto.id)
     this.graphqlService.deleteProduct(producto.id);
     Swal.fire('se elimino el producto selecionado');
     this.getProductos();
     this.RecargarPagina();

  }

  RecargarPagina(){
    window.location.reload()
  }




}
