import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
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
  styleUrl: './app.component.css',
})
export class AppComponent {}
