import { Injectable } from '@angular/core';
import { gql,Apollo } from "apollo-angular";
import { Observable } from 'rxjs';
import { Producto } from "../../app/components/models/gadget";
import { map } from "rxjs/operators";



const  queryConsulta=gql`
query{
  productos{
    nombreProducto
    id
    descripcionProducto
  }
}
`;




@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  products:Producto[]=[];

  constructor(private apollo:Apollo) { }


  getProductosGraphql():any  {
    console.log(queryConsulta);

    this.apollo.watchQuery<any>({
      query: queryConsulta
  }).valueChanges.pipe(map(resp=>{
    console.log(resp);
    return resp;
  })).subscribe((data)=>{
     console.log(data);

  })

  }

  getProductosId(id:number):any{

    const  queryConsultaId=gql`
    query{
      producto(id:${id})
      {
          descripcionProducto
          nombreProducto
      }
    }
    `;

    console.log(queryConsultaId);

    this.apollo.watchQuery<any>({
        query: queryConsultaId
    }).valueChanges.pipe(map(resp=>{
      console.log(resp);
      return resp;
    })).subscribe((data)=>{
       console.log(data);

    })

  }

  createProducto(nombreProducto:string, descripcionProducto:string): any{
    console.log("entra ")
    const mutationCreateProducto=gql`
    mutation {
      createProducto(
        producto: {
          nombreProducto: "matepad  2020"
          descripcionProducto: "matepad 2020 pro"
        }
      ) {
        nombreProducto
      }
    }
    `;

    console.log(mutationCreateProducto);

    this.apollo.mutate<any>({
        mutation: mutationCreateProducto
    }).subscribe(data=>{
       console.log(data);
       return data;
    })





  }

}
