import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acerca',
  templateUrl: './acerca.component.html'
})
export class AcercaComponent implements OnInit{
  titulo = 'Página DENUTI Acerca';

  ngOnInit(){
  	console.log('acerca.component cargado !!');
  }
}
