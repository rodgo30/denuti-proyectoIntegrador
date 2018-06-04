import { recetasModel } from './../../models/recetas.model';
import { HttpClientModule, HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './../global';

@Injectable()
export class RecetasService {
  
  private url: string;

  constructor(
    public _http: Http
  ){
    this.url = GLOBAL.url;
   }

  public getRecetas(){
    return this._http.get(this.url + 'recetas').map(res => res.json());
  }

  public getReceta(id){
    return this._http.get(this.url+'receta/'+id).map(res => res.json());
  }

  public addReceta(receta:recetasModel){
    let json = JSON.stringify(receta);
    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'recetas',params, {headers: headers})
                     .map(res => res.json()); 
  }

  public editReceta(id, receta: recetasModel){    
    let json = JSON.stringify(receta);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'actualizar-receta/'+id, params, {headers: headers})
                     .map(res => res.json());
  }
  
  public deleteReceta(id){
    return this._http.get(this.url+'borrar-receta/'+id)
                     .map(res => res.json());
  }

  public subirImagen(url:string, params:Array<string>,files:Array<File>){
    return new Promise((resolve, reject)=>{
      var formData:any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++){
        formData.append('uploads[]',files[i], files[i].name);
      }
      xhr.onreadystatechange =  function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));            
          }else{
            reject(xhr.response);
          }
        }
      };
      xhr.open("POST",url,true);
      xhr.send(formData);
    });
  }
}
