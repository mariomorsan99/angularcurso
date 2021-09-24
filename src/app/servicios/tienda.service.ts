import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private uriTiendaService='http://localhost:5000/api/Productos';
  public Header:Headers;


  constructor(private http:HttpClient) {
      this.Header= new Headers();
      this.Header.append('Content-Type', 'application/json');

   }

   getProductosTienda(){
      console.log(this.uriTiendaService);
       this.http.get('http://localhost:5000/api/Productos').pipe(map(resp=>{
        console.log(resp)

     })).subscribe(resp=>{console.log(resp)});
   }

   getProductoId(id:number){
      this.http.get(this.uriTiendaService+'/'+ String(id)).pipe(map(resp=>{
       console.log(resp);
     })).subscribe(rest=>rest);
   }



   setProductos(data:any){
     console.log(data);
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

     this.http.post(this.uriTiendaService,data,{headers:headers}).subscribe(resp=>{
       console.log(resp);
     })
   }

   deleteProductoId(id:number):Observable<any>{
    return this.http.delete(this.uriTiendaService+'/'+ String(id)).pipe(map(resp=>{

    }));
  }


}


