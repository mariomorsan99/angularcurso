
export interface Producto {
  Id:number,
  nombreProducto:string,
  descripcionProducto:string

}




export class ProductoModel{

  constructor(
    public nombre?:string,
    public descripcion?:string,
    public img? : string,
    public google?: boolean,
    public id?: number

  ){}

}
