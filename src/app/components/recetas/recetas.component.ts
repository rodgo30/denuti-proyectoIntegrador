import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecetasService } from './recetas.service';
import { recetasModel } from './../../models/recetas.model';

@Component({
  selector: 'recetas',
  templateUrl: './recetas.component.html',
  providers: [RecetasService]
})
export class RecetasComponent implements OnInit{

  public recetas: recetasModel;
  public titulo:string;
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
    private _router:Router,
    private _recetasService: RecetasService
  ){
    this.titulo = 'Listado de Recetas'
    this.confirmado = null;
  }

  ngOnInit(){
    this.getRecetas();
    console.log('recetas.component cargado !!');
  }

  private getRecetas(): void{
    this._recetasService.getRecetas().subscribe(
      result=>{      
        console.log(result.code + " MAS " + result)
        if(result.code != 200){
          console.log('getRecetas ' + result);
        }else{
          this.recetas = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  public borrarReceta(id){
    this._recetasService.deleteReceta(id).subscribe(
      response =>{
        if(response.code == 200){
          this.getRecetas();
        }else{
          alert('Error al borrar la receta');
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
