import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactenos',
  templateUrl: './contactenos.component.html'
})
export class ContactenosComponent implements OnInit{
  titulo:string;
  emailContacto:string;

  constructor(){
    this.titulo = 'Contactenos';
  }

  ngOnInit(){
  	console.log('contactenos.component cargado !!');
  }

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto);
    //console.log(localStorage.getItem('emailContacto'));
  }
}
