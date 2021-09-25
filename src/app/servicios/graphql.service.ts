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

  loading:boolean;
  products:Array<any>


  constructor(private apollo:Apollo) {
    this.products= [];
    this.loading=false;
  }


  getProductosGraphql():any  {
    console.log(queryConsulta);


    this.apollo.watchQuery<any>({
      query: queryConsulta
  }).valueChanges
  .subscribe(({data, loading}) => {
    this.loading = loading;
    this.products = data.productos
    console.log(this.products);
    localStorage.setItem("productos",JSON.stringify(this.products));
    return this.products;
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

  createProducto(nombreProducto?:string, descripcionProducto?:string): any{
    console.log("entra ")
    const mutationCreateProducto=gql`
    mutation {
      createProducto(
        producto: {
          nombreProducto: "${nombreProducto}"
          descripcionProducto: "${descripcionProducto}"
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

  deleteProduct(id?: number){
    const mutationDelete=gql`
    mutation {
      deleteProducto(
        id:${id}
      ) {
        nombreProducto
      }
    }
    `;
    console.log(mutationDelete);

    this.apollo.mutate<any>({
      mutation: mutationDelete
  }).subscribe(data=>{
     console.log(data);
     return data;
  })

  }

  alterProduct(nombreProducto?:string, descripcionProducto?:string, id?: number){
    const mutationAlter=gql`
    mutation {
      editProducto(
        producto: {
          nombreProducto:"${nombreProducto}"
          descripcionProducto:"${descripcionProducto}"
        },
        id:${id}
      ) {
        nombreProducto
      }
    }
    `;

    this.apollo.mutate<any>({
      mutation: mutationAlter
  }).subscribe(data=>{
     console.log(data);
     return data;
  })


  }




}
