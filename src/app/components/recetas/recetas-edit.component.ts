import { RecetasDetailComponent } from './recetas-detail.component';
import { recetasModel } from './../../models/recetas.model';
import { RecetasService } from './recetas.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { GLOBAL } from './../global';

@Component({
    selector:'receta-edit',
    templateUrl: './recetas-add.component.html',
    providers: [RecetasService]                  
})

export class RecetasEditComponent{
    public titulo:string;
    public receta:recetasModel;
    public archivoASubir;
    public resulSubir;
    public is_edit;

    constructor(
        private _route: ActivatedRoute,
        private _router:Router,
        private _recetasService: RecetasService
    ){
        this.titulo = 'Modificar Receta';
        this.receta = new recetasModel(0,"","","","");
        this.is_edit = true;
    }

    ngOnInit(){
        console.log('GetReceta ' + this.receta);
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

    onSubmit(){
        console.log(this.receta);

        if(this.archivoASubir && this.archivoASubir.length >= 1){
            this._recetasService.subirImagen(GLOBAL.url+'subir-imagen',[],this.archivoASubir).then((result)=>{
                console.log('Desde onSubmit ' +result);
                this.resulSubir = result;
                this.receta.imagen = this.resulSubir.nombrearchivo;
                this.actualizarReceta();
            },(error)=>{
                console.log(<any>'Error OnSubmit ' + error);
            });
        }else{
            this.actualizarReceta();
        }
    }
    
    public actualizarReceta(){
        this._route.params.forEach((params: Params) =>{
            let id = params['id'];
            this._recetasService.editReceta(id, this.receta).subscribe(
                response =>{
                    if(response.code == 200){                                                      
                        this._router.navigate(['/receta', id]);
                    }
                    else{
                        console.log('Error actualizar receta ' + response.message);
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