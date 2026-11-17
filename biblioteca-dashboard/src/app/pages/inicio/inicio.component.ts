import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibraryDataService } from '../../core/services/library-data.service';
import { KpiCardComponent } from '../../shared/kpi-card/kpi-card.component';

@Component({
  selector: 'app-inicio',
  imports: [KpiCardComponent, RouterLink],
  templateUrl: './inicio.component.html',
})
export class InicioComponent {
  private readonly data = inject(LibraryDataService);

  readonly totalBooks = this.data.getBooks().length;
  readonly totalAuthors = this.data.getAuthors().length;
  readonly totalCategories = this.data.getCategories().length;
  readonly activeLoans = this.data.getLoans().filter(l => l.status === 'Activo').length;
  readonly overdueLoans = this.data.getLoans().filter(l => l.status === 'Vencido').length;
  readonly availableCopies = this.data.getBooks().reduce((sum, b) => sum + b.availableCopies, 0);

  readonly recentBooks = this.data.getBooks().slice(-4).reverse().map(book => ({
    ...book,
    authorName: this.data.getAuthorName(book.authorId),
  }));
}
