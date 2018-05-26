import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
    <h2>{{titulo}}</h2>
    <input type="text" [(ngModel)] = "emailContacto" />
    <button (click)="guardarEmail()">Guardar Email</button>
  `
})

export class GuardarEmailComponent {
  titulo = 'Guardar-email';

  emailContacto:string;

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto);
    //console.log(localStorage.getItem('emailContacto'));
  }
}
