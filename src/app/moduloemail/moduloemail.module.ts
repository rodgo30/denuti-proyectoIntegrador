//Importar modulos necesarios para crear modulos

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// //Importar componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
 import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
 import { MainEmailComponent } from './components/main-email/main-email.component';
 import { FormsModule } from '@angular/forms';

//Decorador ngModule para cargar los componentes y la configuración del modulo

@NgModule({ 
    imports: [CommonModule, FormsModule],
    declarations:[
         GuardarEmailComponent,
         MostrarEmailComponent,
         MainEmailComponent         
    ],
     exports:[MainEmailComponent]
})

export class ModuloEmailModule{
    
}
