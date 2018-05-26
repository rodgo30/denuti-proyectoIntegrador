import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
    <div class="panel panel-default">
      <h2>{{titulo}}</h2>
      <hr>
      <guardar-email></guardar-email>
      <mostrar-email></mostrar-email>
    </div>
  `
})

export class MainEmailComponent implements OnInit {
  titulo = 'modulo de email';
  emailContacto:string;

  ngOnInit(){
    console.log("Componente principal del modulo")
  }
}
