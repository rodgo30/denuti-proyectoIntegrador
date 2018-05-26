import { routing } from './../../app.routing';
import { RecetasService } from './recetas.service';
import { recetasModel } from './../../model/recetas.model';
import { RecetasComponent } from './recetas.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './recetas-form.component.html'
})
export class RecetasFormComponent implements OnInit {

  private receta: recetasModel = new recetasModel()
  private titulo: string = "Crear Receta"

  constructor(private recetasService : RecetasService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }
    public archivoASubir;
    public resulSubir;

  ngOnInit() {
    console.log("Antes de nada")
    this.cargarReceta()
    console.log(this.receta.id + ' y ' + this.receta.nombre)
  }

  cargarReceta() : void{
    console.log("Entro cargarReceta")
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      console.log('cargarReceta ' +  this.receta.id)
      if(id){
        this.recetasService.getReceta(id).subscribe((receta) => this.receta = receta) 
      }
      else{
        console.log("cliente no existe")
      }
    })
  }

  public OnSubmit(){
    console.log(this.receta);
    if(this.archivoASubir >= 1){
      this.recetasService.subirImagen('http://localhost:8080/api/' + 'recetas',[],this.archivoASubir).then((result)=>{
      console.log("Este es el result: " + result);
      this.resulSubir = result;
      this.receta.imagen = this.resulSubir.filename;
      this.create();
      console.log(this.receta);
      },(error)=>{
        console.log(error); 
      });
    }else{
      this.create();
    }
  }

  public create() : void{
    this.recetasService.crearReceta(this.receta).subscribe(
      response => this.router.navigate(['/recetas'])
    )
  }

  elegirArchivo(fileInput: any){
    this.archivoASubir = <Array<File>>fileInput.target.files;
    console.log(this.archivoASubir);
  }

}
