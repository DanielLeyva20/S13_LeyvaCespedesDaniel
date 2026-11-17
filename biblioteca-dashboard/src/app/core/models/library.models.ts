export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Author {
  id: number;
  name: string;
  country: string;
  birthYear: number;
}

export interface Book {
  id: number;
  title: string;
  authorId: number;
  categoryId: number;
  year: number;
  copies: number;
  availableCopies: number;
}

export type LoanStatus = 'Activo' | 'Devuelto' | 'Vencido';

export interface Loan {
  id: number;
  bookId: number;
  member: string;
  loanDate: string;
  dueDate: string;
  status: LoanStatus;
}
