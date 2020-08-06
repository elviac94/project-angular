import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDescription } from '../../interfaces/product-description.interface'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductDescription;
  id:string;

  constructor( private route:ActivatedRoute,
               public productService: ProductsService ) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(parametros=>{
      // console.log(parametros['id'])
      this.productService.getProducto(parametros['id'])
        .subscribe( ( producto: ProductDescription ) =>{
          this.id = parametros['id']
          this.producto = producto
          console.log(producto)
          
        });
    })
  }

}
