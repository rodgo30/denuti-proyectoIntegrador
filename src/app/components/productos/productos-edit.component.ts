import { ProductoDetailComponent } from './productos-detail.component';
import { productosModel } from './../../models/productos.model';
import { ProductoService } from './productos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { GLOBAL } from './../global';

@Component({
    selector:'producto-edit',
    templateUrl: './productos-add.component.html',
    providers: [ProductoService]                  
})

export class ProductoEditComponent{
    public titulo:string;
    public producto:productosModel;
    public archivoASubir;
    public resulSubir;
    public is_edit;

    constructor(
        private _route: ActivatedRoute,
        private _router:Router,
        private _productosService: ProductoService
    ){
        this.titulo = 'Editar producto';
        this.producto = new productosModel(0,"","","",0);
        this.is_edit = true;
    }

    ngOnInit(){
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

    onSubmit(){
        console.log(this.producto);

        if(this.archivoASubir && this.archivoASubir.length >= 1){
            this._productosService.subirImagen(GLOBAL.url+'subir-imagen',[],this.archivoASubir).then((result)=>{
                console.log('Desde onSubmit ' +result);
                this.resulSubir = result;
                this.producto.imagen = this.resulSubir.nombrearchivo;
                this.actualizarProducto();
            },(error)=>{
                console.log(<any>'Error OnSubmit ' + error);
            });
        }else{
            this.actualizarProducto();
        }
    }
    
    public actualizarProducto(){
        this._route.params.forEach((params: Params) =>{
            let id = params['id'];
            this._productosService.editProducto(id, this.producto).subscribe(
                response =>{
                    if(response.code == 200){                                                      
                        this._router.navigate(['/producto', id]);
                    }
                    else{
                        console.log('Error actualizarProducto ' + response);
                    }
                },
                error =>{
                    console.log("Error " + <any>error);
                }
            );
        });
    }
 
    elegirArchivo(fileInput: any){
        this.archivoASubir = <Array<File>>fileInput.target.files;
        console.log(this.archivoASubir);
    }  
}