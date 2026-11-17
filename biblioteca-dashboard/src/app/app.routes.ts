import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, title: 'Inicio · BiblioTeca' },
  { path: 'libros', component: LibrosComponent, title: 'Libros · BiblioTeca' },
  { path: 'autores', component: AutoresComponent, title: 'Autores · BiblioTeca' },
  { path: 'categorias', component: CategoriasComponent, title: 'Categorías · BiblioTeca' },
  { path: 'prestamos', component: PrestamosComponent, title: 'Préstamos · BiblioTeca' },
  { path: '**', component: NotFoundComponent, title: 'Página no encontrada · BiblioTeca' },
];
