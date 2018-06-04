import { routing } from './../../app.routing';
import { RecetasService } from './recetas.service';
import { recetasModel } from './../../models/recetas.model';
import { RecetasComponent } from './recetas.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../global';

@Component({
  selector: 'recetas-add',
  templateUrl: './recetas-add.component.html'
})
export class RecetasAddComponent implements OnInit {

  public titulo:string;
  public receta:recetasModel;
  public archivoASubir;
  public resulSubir;

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _recetasService: RecetasService
  ){
    this.titulo = 'Crear Receta';
    this.receta = new recetasModel(0,"","","","");
  }
  
  ngOnInit(){
    // this.getProductos();
    console.log('productos-add.component cargado !!');
  }

  onSubmit(){
    if(this.archivoASubir && this.archivoASubir.length >= 1){
        this._recetasService.subirImagen(GLOBAL.url+'subir-imagen',[],this.archivoASubir).then((result)=>{
          console.log(result);
          this.resulSubir = result;
          this.receta.imagen = this.resulSubir.nombrearchivo;
          this.guardarReceta();
        },(error)=>{
          console.log(error);
        });
    }else{
      this.guardarReceta();
    }
  }
  
  public guardarReceta(){
    this._recetasService.addReceta(this.receta).subscribe(
      response =>{
          if(response.code == 200){                              
              console.log(response.message);
              this._router.navigate(['/recetas']);
          }else{
            console.log('Devolvio error guardarRecta ' + response.message)
          }
      },
      error =>{
          console.log("Error " + <any>error);
      }
    );
  }
  
  private getRecetas(): void{
    this._recetasService.getRecetas().subscribe(
      result=>{      
        if(result.code != 200){
          console.log(result);
        }else{
          this.receta = result.data;
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
