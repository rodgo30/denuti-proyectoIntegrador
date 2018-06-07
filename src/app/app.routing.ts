import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { RecetasAddComponent } from './components/recetas/recetas-add.component';
import { RecetasDetailComponent } from './components/recetas/recetas-detail.component';
import { RecetasEditComponent } from './components/recetas/recetas-edit.component';
import { ErrorComponent } from './components/error.component';
import { ProductoAddComponent } from './components/productos/productos-add.component';
import { ProductoDetailComponent } from './components/productos/productos-detail.component';
import { ProductoEditComponent } from './components/productos/productos-edit.component';

const appRoutes: Routes = [
{path: '', component: InicioComponent},
{path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: 'inicio', component: InicioComponent},
{path: 'acerca', component: AcercaComponent},
{path: 'contactenos', component: ContactenosComponent},
{path: 'recetas', component: RecetasComponent},
{path: 'crear-receta', component: RecetasAddComponent},
{path: 'editar-receta/:id', component: RecetasEditComponent},
{path: 'receta/:id', component: RecetasDetailComponent},
{path: 'productos', component: ProductosComponent},
{path: 'crear-producto', component: ProductoAddComponent},
{path: 'producto/:id',component: ProductoDetailComponent},
{path: 'editar-producto/:id',component: ProductoEditComponent},
{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);