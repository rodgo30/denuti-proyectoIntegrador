import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
    <h4>{{titulo}}</h4>
    <span *ngIf="emailContacto" style="color: white" >
      Email de Contacto: {{emailContacto}}
    </span>
  `
})

export class MostrarEmailComponent implements OnInit, DoCheck{
  titulo = 'mostrar-email';

  emailContacto:string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.removeItem("emailContacto");
    localStorage.clear();
    this.emailContacto = null;
  }
}
