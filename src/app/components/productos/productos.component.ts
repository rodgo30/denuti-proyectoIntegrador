import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { productosModel } from './../../model/productos.model';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  providers: [ProductosService]
})
export class ProductosComponent implements OnInit{
  
  private productos: Array<productosModel>;

  titulo = 'Página DENUTI productos';

  constructor(private productosService: ProductosService){

  }
  
  ngOnInit(){
    this.loadProductos();
    console.log('productos.component cargado !!');
  }

  private loadProductos(): void{
    this.productosService.getProductos().subscribe(res=>{
      this.productos = res;
      console.log(res);
    });
  }
}
