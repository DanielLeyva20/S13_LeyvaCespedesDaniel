import { Component, inject } from '@angular/core';
import { LibraryDataService } from '../../core/services/library-data.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  private readonly data = inject(LibraryDataService);

  readonly books = this.data.getBooks().map(book => ({
    ...book,
    authorName: this.data.getAuthorName(book.authorId),
    categoryName: this.data.getCategoryName(book.categoryId),
  }));
}
