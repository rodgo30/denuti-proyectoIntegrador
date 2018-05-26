import { productosModel } from './../../model/productos.model';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductosService {

  constructor(private http:HttpClient) { }

  public getProductos():Observable<productosModel[]>{
    return this.http.get<productosModel[]>("http://localhost:8080/api/productos");
      
  }
}
