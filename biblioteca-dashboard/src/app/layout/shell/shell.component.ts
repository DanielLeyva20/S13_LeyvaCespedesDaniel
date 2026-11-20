import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

/** Estructura del dashboard (menú + encabezado + vistas) para rutas privadas. */
@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="shell">
      <app-sidebar />
      <div class="shell__content">
        <app-header />
        <main class="shell__main">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styleUrl: './shell.component.css',
})
export class ShellComponent {}
