import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from './productos.service';
import { productosModel } from './../../models/productos.model';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit{
  public titulo:string;
  public productos:productosModel[];
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _productosService: ProductoService
  ){
    this.titulo = 'Listado de productos';
    this.confirmado = null;
  }
  
  ngOnInit(){
    this.getProductos();
    console.log('productos.component cargado !!');
  }

  private getProductos(): void{
    this._productosService.getProductos().subscribe(
      result=>{      
        // console.log(result.code + " MAS " + result.value)
        if(result.code != 200){
          console.log('getProductos ' + result);
        }else{
          this.productos = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  public borrarProducto(id){
    this._productosService.deleteProducto(id).subscribe(
      response =>{
        if(response.code == 200){
          this.getProductos();
        }else{
          alert('Error al borrar producto');
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  } 

  public confirmarBorrado(id){
    this.confirmado = id;
  }

  public cancelarBorrado(){
    this.confirmado = null;
  }  
}
