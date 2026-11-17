import { Component, inject } from '@angular/core';
import { LibraryDataService } from '../../core/services/library-data.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
})
export class CategoriasComponent {
  private readonly data = inject(LibraryDataService);

  readonly categories = this.data.getCategories().map(category => ({
    ...category,
    bookCount: this.data.countBooksByCategory(category.id),
  }));
}
