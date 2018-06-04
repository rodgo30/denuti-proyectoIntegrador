import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { RecetasAddComponent } from './components/recetas/recetas-add.component';
import { ErrorComponent } from './components/error.component';
import { ProductoAddComponent } from './components/productos/producto-add.component';
import { ProductoDetailComponent } from './components/productos/producto-detail.component';
import { ProductoEditComponent } from './components/productos/producto-edit-component';

const appRoutes: Routes = [
//{path: '', component: InicioComponent},
//{path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: 'inicio', component: InicioComponent},
{path: 'productos', component: ProductosComponent},
{path: 'recetas', component: RecetasComponent},
{path: 'acerca', component: AcercaComponent},
{path: 'contactenos', component: ContactenosComponent},
{path: 'crear-receta', component: RecetasAddComponent},
{path: 'receta/:id', component: RecetasComponent},
{path: 'crear-producto', component: ProductoAddComponent},
{path: 'producto/:id',component: ProductoDetailComponent},
{path: 'editar-producto/:id',component: ProductoEditComponent},
{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);