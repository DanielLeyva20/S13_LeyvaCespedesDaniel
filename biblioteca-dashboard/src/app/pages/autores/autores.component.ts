import { Component, inject } from '@angular/core';
import { LibraryDataService } from '../../core/services/library-data.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
})
export class AutoresComponent {
  private readonly data = inject(LibraryDataService);

  readonly authors = this.data.getAuthors().map(author => ({
    ...author,
    bookCount: this.data.countBooksByAuthor(author.id),
  }));
}
