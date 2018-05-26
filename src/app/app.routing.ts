import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { RecetasFormComponent } from './components/recetas/recetas-form.component';


const appRoutes: Routes = [
//{path: '', component: InicioComponent},
//{path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: 'inicio', component: InicioComponent},
{path: 'productos', component: ProductosComponent},
{path: 'recetas', component: RecetasComponent},
{path: 'acerca', component: AcercaComponent},
{path: 'contactenos', component: ContactenosComponent},
{path: 'recetas-form', component: RecetasFormComponent},
{path: 'recetas-form/:id', component: RecetasFormComponent}

//{path: '**', component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);