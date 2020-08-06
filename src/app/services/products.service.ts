import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cargando = true
  productos: ProductoInterface []=[]

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://project-angular-c025d.firebaseio.com/productos_idx.json')
    .subscribe( (resp: ProductoInterface[])=>{
      this.productos = resp;
      this.cargando = false;
    })
  }
  getProducto( id:string ){
     return this.http.get(`https://project-angular-c025d.firebaseio.com/productos/${id}.json`)
  }
}
