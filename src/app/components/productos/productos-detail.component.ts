import { Component, OnInit } from '@angular/core';
import { productosModel } from './../../models/productos.model';
import { ProductoService } from './productos.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GLOBAL } from '../global';

@Component({
  selector: 'producto-detail',
  templateUrl: './productos-detail.component.html',
  providers: [ProductoService]
})

export class ProductoDetailComponent{
    public producto: productosModel;
    // public titulo:string;

    constructor(
        private _route: ActivatedRoute,
        private _router:Router,
        private _productosService: ProductoService
    ){}

    ngOnInit(){
        console.log('Producto-datail Cargado');
        // this.titulo = 'Modificar Producto';
        this.getProducto();
    }

    public getProducto(){
        this._route.params.forEach((params: Params) =>{
            let id = params['id'];
            this._productosService.getProducto(id).subscribe(
                response =>{
                    if(response.code == 200){
                        this.producto = response.data;
                    }else{
                        this._router.navigate(['/productos']);
                    }
                },
                error =>{
                    console.log(<any>error);
                }
            );
        });
    }
}
