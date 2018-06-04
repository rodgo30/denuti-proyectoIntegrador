import { productosModel } from './../../models/productos.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from './productos.service';
import { GLOBAL } from '../global';

@Component({
  selector: 'producto-add',
  templateUrl: './producto-add.component.html',
  providers: [ProductoService]
})
export class ProductoAddComponent implements OnInit{
  public titulo:string;
  public producto:productosModel;
  public archivoASubir;
  public resulSubir;

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _productosService: ProductoService
  ){
    this.titulo = 'Crear Producto';
    this.producto = new productosModel(0,"","","",0);
  }
  
  ngOnInit(){
    // this.getProductos();
    console.log('productos-add.component cargado !!');
  }

  onSubmit(){
    if(this.archivoASubir && this.archivoASubir.length >= 1){
        this._productosService.subirImagen(GLOBAL.url+'subir-imagen',[],this.archivoASubir).then((result)=>{
          console.log(result);
          this.resulSubir = result;
          this.producto.imagen = this.resulSubir.nombrearchivo;
          this.guardarProducto();
        },(error)=>{
          console.log(error);
        });
    }else{
      this.guardarProducto();
    }
  }
  
  public guardarProducto(){
    this._productosService.addProducto(this.producto).subscribe(
      response =>{
          if(response.code == 200){                              
              console.log(response.message);
              this._router.navigate(['/productos']);
          }else{
            console.log('Devolvio error guardarProducto ' + response.message)
          }
      },
      error =>{
          console.log("Error " + <any>error);
      }
    );
  }
  
  private getProductos(): void{
    this._productosService.getProductos().subscribe(
      result=>{      
        if(result.code != 200){
          console.log(result);
        }else{
          this.producto = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  elegirArchivo(fileInput: any){
    this.archivoASubir = <Array<File>>fileInput.target.files;
    console.log(this.archivoASubir);
  }  
}
