import { Injectable } from '@angular/core';
import { Author, Book, Category, Loan } from '../models/library.models';

/** Fuente de datos simulados del sistema de biblioteca. */
@Injectable({ providedIn: 'root' })
export class LibraryDataService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Novela', description: 'Narrativa de ficción extensa.' },
    { id: 2, name: 'Realismo mágico', description: 'Lo fantástico integrado en lo cotidiano.' },
    { id: 3, name: 'Ciencia ficción', description: 'Futuros posibles y tecnología.' },
    { id: 4, name: 'Poesía', description: 'Obras líricas y versos.' },
    { id: 5, name: 'Ensayo', description: 'Reflexión y pensamiento crítico.' },
  ];

  private readonly authors: Author[] = [
    { id: 1, name: 'Gabriel García Márquez', country: 'Colombia', birthYear: 1927 },
    { id: 2, name: 'Isabel Allende', country: 'Chile', birthYear: 1942 },
    { id: 3, name: 'Mario Vargas Llosa', country: 'Perú', birthYear: 1936 },
    { id: 4, name: 'Jorge Luis Borges', country: 'Argentina', birthYear: 1899 },
    { id: 5, name: 'Pablo Neruda', country: 'Chile', birthYear: 1904 },
    { id: 6, name: 'Octavio Paz', country: 'México', birthYear: 1914 },
  ];

  private readonly books: Book[] = [
    { id: 1, title: 'Cien años de soledad', authorId: 1, categoryId: 2, year: 1967, copies: 5, availableCopies: 2 },
    { id: 2, title: 'El amor en los tiempos del cólera', authorId: 1, categoryId: 1, year: 1985, copies: 3, availableCopies: 3 },
    { id: 3, title: 'La casa de los espíritus', authorId: 2, categoryId: 2, year: 1982, copies: 4, availableCopies: 1 },
    { id: 4, title: 'La ciudad y los perros', authorId: 3, categoryId: 1, year: 1963, copies: 2, availableCopies: 2 },
    { id: 5, title: 'Ficciones', authorId: 4, categoryId: 3, year: 1944, copies: 3, availableCopies: 0 },
    { id: 6, title: 'Veinte poemas de amor', authorId: 5, categoryId: 4, year: 1924, copies: 6, availableCopies: 5 },
    { id: 7, title: 'El laberinto de la soledad', authorId: 6, categoryId: 5, year: 1950, copies: 2, availableCopies: 1 },
    { id: 8, title: 'El Aleph', authorId: 4, categoryId: 3, year: 1949, copies: 3, availableCopies: 2 },
  ];

  private readonly loans: Loan[] = [
    { id: 1, bookId: 1, member: 'Ana Torres', loanDate: '2026-11-03', dueDate: '2026-11-17', status: 'Activo' },
    { id: 2, bookId: 5, member: 'Luis Ramírez', loanDate: '2026-10-10', dueDate: '2026-10-24', status: 'Vencido' },
    { id: 3, bookId: 3, member: 'María Quispe', loanDate: '2026-11-08', dueDate: '2026-11-22', status: 'Activo' },
    { id: 4, bookId: 7, member: 'Carlos Pérez', loanDate: '2026-10-28', dueDate: '2026-11-11', status: 'Devuelto' },
    { id: 5, bookId: 1, member: 'Sofía Mendoza', loanDate: '2026-11-05', dueDate: '2026-11-19', status: 'Activo' },
    { id: 6, bookId: 5, member: 'Diego Castro', loanDate: '2026-11-01', dueDate: '2026-11-15', status: 'Vencido' },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getAuthors(): Author[] {
    return this.authors;
  }

  getBooks(): Book[] {
    return this.books;
  }

  getLoans(): Loan[] {
    return this.loans;
  }

  getAuthorName(id: number): string {
    return this.authors.find(a => a.id === id)?.name ?? 'Desconocido';
  }

  getCategoryName(id: number): string {
    return this.categories.find(c => c.id === id)?.name ?? 'Sin categoría';
  }

  getBookTitle(id: number): string {
    return this.books.find(b => b.id === id)?.title ?? 'Desconocido';
  }

  countBooksByAuthor(authorId: number): number {
    return this.books.filter(b => b.authorId === authorId).length;
  }

  countBooksByCategory(categoryId: number): number {
    return this.books.filter(b => b.categoryId === categoryId).length;
  }
}
