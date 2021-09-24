import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../servicios/tienda.service';
@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  nombrePro='Acer Aspire C24';
  descripcionPro='Desktop, Pantalla Full HD de 23.8 Pulgadas, Intel Core i3-1005G1';
  productosTienda:any;


  constructor(private tiendaService:TiendaService) {

      //this.getProductosTienda();

   }

  ngOnInit(): void {
  }

  getProductosTienda(){
   this.tiendaService.getProductosTienda();
      console.log(this.productosTienda);
  }

  getProductosTiendaId(){

    this.tiendaService.getProductoId(2);

  }

  setProductoTienda(){
    const data= {
      "nombreProducto":'Dell',
      "descripcionProducto":'Dell Laptop 3400 '
      }
    this.tiendaService.setProductos(data);
  }

  deleteProductoId(){
    this.tiendaService.deleteProductoId(2).subscribe(result=>{
      console.log(result);
    })
  }

}




