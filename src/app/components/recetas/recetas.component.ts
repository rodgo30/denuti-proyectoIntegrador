import { Component, OnInit } from '@angular/core';
import { RecetasService } from './recetas.service';
import { recetasModel } from './../../model/recetas.model';

@Component({
  selector: 'recetas',
  templateUrl: './recetas.component.html',
  providers: [RecetasService]
})
export class RecetasComponent implements OnInit{

  private recetas: Array<recetasModel>;

  titulo = 'Página DENUTI recetas';

  constructor(private recetasService: RecetasService){

  }

  ngOnInit(){
    this.loadRecetas();
    console.log('recetas.component cargado !!');
  }

  private loadRecetas(): void{
    this.recetasService.getRecetas().subscribe(res=>{
      this.recetas = res;
    });
  }
}
