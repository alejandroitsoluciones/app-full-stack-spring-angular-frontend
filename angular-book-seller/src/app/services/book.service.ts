import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL = `${environment.BASE_URL}/api/v1`;

@Injectable({
  providedIn: 'root'
})
export class BookService extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, httpClient: HttpClient) { 
    super(authenticationService, httpClient);
   }

   saveBook(book: Book): Observable<any> {
    return this.httpClient.post(API_URL + '/books', book, {headers: this.getHeader});
   }

   deleteBook(book: Book): Observable<any> {
     return this.httpClient.delete(`${API_URL}/books/${book.id}`, {headers: this.getHeader});
   }

   getAllBooks(): Observable<any> {
     return this.httpClient.get(API_URL + '/books');
   }
}
