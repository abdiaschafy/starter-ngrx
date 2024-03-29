import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private BOOKS_API_URL='api/books';

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BOOKS_API_URL);
  }

  public addBook(book: Book): Observable<Book> {
    const body: Book = { ...book, id: null };
    return this.http.post<Book>(this.BOOKS_API_URL, body);
  }

  public deleteBook(id: number): Observable<{}> {
    return this.http.delete<Book>(`${this.BOOKS_API_URL}/${id}`);
  }

  public updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.BOOKS_API_URL}/${book.id}`, book);
  }
}
