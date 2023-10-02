import { Injectable } from "@angular/core";
import { BookModel } from "../Model/book-model";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable, map, tap } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl = 'https://localhost:7027/api/book'
  
  
  constructor(private http:HttpClient) {}

  
  // Get All Books
  getAllBooks():Observable<any>{
    return this.http.get<BookModel[]>(this.baseurl)
  }
  
  //Get Book By ID
  getBookByID(id:string):Observable<any>{
    return this.http.get<BookModel>(this.baseurl + '/' + id);
  }

  //Add New Book
  addBook(book:BookModel):Observable<BookModel>{
    book.id = ''
    return this.http.post<BookModel>(this.baseurl, book)
  }

  //Update Book
  updateBook(book:BookModel):Observable<BookModel>{
    return this.http.put<BookModel>(this.baseurl, book)
  }

  //Delete Book
  deleteBook(id:string):Observable<BookModel>{
    return this.http.delete<BookModel>(this.baseurl + '/' + id)
  }
}
