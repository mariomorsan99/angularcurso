
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private producto:Productos[]=[

    {
      nombreProducto:'Acer ',
      descripcionProducto:'Acer Aspire 5 A515-46-R14K Slim Laptop | 15.6\" Full HD IPS | AMD Ryzen 3 3350U',
      precioProducto:'6,000',
      imagenProducto:'../../../assets/imagenes/acer.jpg'

    },
    {
      nombreProducto:'Dell ',
      descripcionProducto:'Dell Laptop 3400 Intel Core i7-8565U 500GB HDD 8GB Nvidia GeForce MX130',
      precioProducto:'7,000',
      imagenProducto:'../../../assets/imagenes/dell.jpg'

    },
    {
      nombreProducto:'Hp ',
      descripcionProducto:'HP Laptop Intel Core i3-1115G4, 4-GB DDR4-2666 MHz, 256GB SSD Win 10 Home S',
      precioProducto:'9,000',
      imagenProducto:'../../../assets/imagenes/hp.jpg'

    },
    {
      nombreProducto:'Huawei',
      descripcionProducto:'Huawei MateBook D 15- Laptop de 15.6", Procesador Intel Core i3, Memoria de 256GB+8GB RAM, Windows 10, Gris',
      precioProducto:'10,000',
      imagenProducto:'../../../assets/imagenes/huawei.jpg'

    }


  ];

  constructor() { }

  getProductos(){
    return this.producto
  }

  getProductosId(indiceProducto:number){
    return this.producto[indiceProducto]
  }

}

export interface Productos
{
   nombreProducto:String,
   descripcionProducto:String,
   precioProducto:String,
   imagenProducto:string
}