import { recetasModel } from './../../models/recetas.model';
import { HttpClientModule, HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { post } from 'selenium-webdriver/http';


@Injectable()
export class RecetasService {
  
  private url: string = "http://localhost:8080/api/recetas";

  constructor(private http:HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getRecetas():Observable<recetasModel[]>{
    return this.http.get<recetasModel[]>(this.url);      
  }

  crearReceta (receta : recetasModel) : Observable<recetasModel>{
    return this.http.post<recetasModel>(this.url,receta,{headers:this.httpHeaders})
  }

  getReceta(id) : Observable<recetasModel>{
    return this.http.get<recetasModel>(`${this.url}/${id}`)
  }

  subirImagen(url:string, params:Array<string>,files:Array<File>){
    return new Promise((resolve, reject)=>{
      var formData:any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++){
        formData.append('uploads[]', files[i], files[i].name);
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
