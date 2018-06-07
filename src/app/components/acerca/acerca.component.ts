import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acerca',
  templateUrl: './acerca.component.html'
})
export class AcercaComponent implements OnInit{
  titulo = 'Acerca de Nosotros';

  ngOnInit(){
  	console.log('acerca.component cargado !!');
  }
}
