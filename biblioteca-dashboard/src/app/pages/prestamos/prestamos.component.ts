import { Component, inject } from '@angular/core';
import { LibraryDataService } from '../../core/services/library-data.service';
import { LoanStatus } from '../../core/models/library.models';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
})
export class PrestamosComponent {
  private readonly data = inject(LibraryDataService);

  readonly loans = this.data.getLoans().map(loan => ({
    ...loan,
    bookTitle: this.data.getBookTitle(loan.bookId),
  }));

  badgeClass(status: LoanStatus): string {
    const classes: Record<LoanStatus, string> = {
      Activo: 'badge--info',
      Devuelto: 'badge--ok',
      Vencido: 'badge--danger',
    };
    return classes[status];
  }
}
