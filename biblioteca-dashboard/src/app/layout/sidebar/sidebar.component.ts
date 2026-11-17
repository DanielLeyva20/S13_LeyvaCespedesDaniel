import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly menuItems: MenuItem[] = [
    { path: '/inicio', label: 'Inicio', icon: '🏠' },
    { path: '/libros', label: 'Libros', icon: '📚' },
    { path: '/autores', label: 'Autores', icon: '✍️' },
    { path: '/categorias', label: 'Categorías', icon: '🗂️' },
    { path: '/prestamos', label: 'Préstamos', icon: '🔖' },
  ];
}
