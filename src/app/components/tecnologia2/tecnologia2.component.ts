import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService, Productos } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-tecnologia2',
  templateUrl: './tecnologia2.component.html',
  styleUrls: ['./tecnologia2.component.css']
})
export class Tecnologia2Component implements OnInit {

  productos: Productos[] = [];

  constructor(private _productosService:ProductosService, private router:Router) {
    console.log('servicio listo')
   }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
   this.productos=  this._productosService.getProductos();
   console.log(this.productos)
  }

  VerProducto(indiceProducto:number){

   console.log(indiceProducto);
   this.router.navigate(['/itemProducto',indiceProducto]);


  }

}
