import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

//Importar Modulo
import { ModuloEmailModule } from './moduloemail/moduloemail.module';


//Componentes

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { RecetasFormComponent } from './components/recetas/recetas-form.component';
import { RecetasService } from './components/recetas/recetas.service';
import { recetasModel } from './model/recetas.model';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    RecetasComponent,
    AcercaComponent,
    ContactenosComponent,
    RecetasFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    ModuloEmailModule
  ],
  providers: [
    appRoutingProviders,
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
