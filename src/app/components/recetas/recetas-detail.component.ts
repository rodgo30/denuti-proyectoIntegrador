import { Component, OnInit } from '@angular/core';
import { recetasModel } from './../../models/recetas.model';
import { RecetasService } from './recetas.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GLOBAL } from '../global';

@Component({
  selector: 'receta-detail',
  templateUrl: './recetas-detail.component.html',
  providers: [RecetasService]
})

export class RecetasDetailComponent{
    public receta: recetasModel;

    constructor(
        private _route: ActivatedRoute,
        private _router:Router,
        private _recetasService: RecetasService
    ){}

    ngOnInit(){
        console.log('receta-datail Cargado');
        this.getReceta();
    }

    public getReceta(){
        this._route.params.forEach((params: Params) =>{
            let id = params['id'];
            this._recetasService.getReceta(id).subscribe(
                response =>{
                    if(response.code == 200){
                        this.receta = response.data;
                    }else{
                        this._router.navigate(['/recetas']);
                    }
                },
                error =>{
                    console.log(<any>error);
                }
            );
        });
    }
}
