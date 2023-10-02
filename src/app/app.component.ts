import { Component } from '@angular/core';
import { BookModel } from './Model/book-model';
import { BookService } from './Service/book.service';
import { RouterModule } from '@angular/router';

import { HttpStatusCode } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  

 

  //Get all books
  // getAllBooks(){
  //   this.bookService.getAllBooks().subscribe(response => {this.books = response; console.log(this.books)})
  // }



  //Add new book
  // onSubmit(){
  //   if(this.book.id == ''){
  //     this.bookService.addBook(this.book).subscribe(response => {this.getAllBooks();
  //     this.book = {
  //       id:'',
  //       name:'',
  //       author:'',
  //       releaseYear:'',
  //       genre:'',
  //       description:''
  //     }
  //     })
  //   }
  //   else{
  //     this.updateBook(this.book)
  //   }
  // }

  // //Updates book
  // updateBook(book:BookModel){
  //   this.bookService.updateBook(book).subscribe(response => this.getAllBooks())
  // }
  
  // //Deletes book
  // onDelete(id:string){
  //   this.bookService.deleteBook(id).subscribe(response => this.getAllBooks())
  // }

  // populateForm(book:BookModel){
  //   this.book = book;
  // }
}
