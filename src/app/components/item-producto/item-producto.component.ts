import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ProductosService, Productos } from '../../servicios/productos.service';


@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

  producto:  any;

  constructor(private activated:ActivatedRoute, private serviceProducto:ProductosService) {
    this.activated.params.subscribe(result=>
      {
       
        console.log(result['id']);
        
       this.producto= serviceProducto.getProductosId(result['id']);
       console.log(this.producto);
       

      })
   }

  ngOnInit(): void {
  }

}
