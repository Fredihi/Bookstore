import { Component } from '@angular/core';
import { BookService } from '../Service/book.service';
import { BookModel } from '../Model/book-model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  template: `
    <div class="container">
      <h1>Book Edit</h1>
      <div class="details">
        <div class="detailsinfo">
        <form #form="ngForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label class="editTitle">Name</label>
            <br>
            <input type="text" class="editInfo" name="name"[(ngModel)]="book.name">
          </div>
  
          <div class="form-group">
            <label class="editTitle">Author</label>
            <br>
            <input type="text" class="editInfo" name="author"[(ngModel)]="book.author">
          </div>
  
          <div class="form-group form-group-inline">
            <div class="form-group">
              <label class="editTitle">Release Year</label>
              <br>
              <input type="date" name="releaseYear"[(ngModel)]="book.releaseYear">
            </div>
  
            <div class="form-group">
              <label class="editTitle">Genre</label>
              <br>
              <input type="text" class="editInfo" name="genre"[(ngModel)]="book.genre">
            </div>
  
            <div class="form-group">
              <label class="editTitle">Description</label>
              <br>
              <textarea name="description" class="editDesc" rows="5" cols="50"[(ngModel)]="book.description"></textarea>
            </div>
          </div>
          <div class="form-group">
          <button routerLink="/bookstore/books" class="btn btn-outline-dark" style="margin-top: 20px;"><i class="fa-solid fa-arrow-left"></i>Back</button>
          <button class="btn btn-success" style="margin-top: 20px; margin-left: 5px;">Save</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  book:BookModel = {
    id:'',
    name:'',
    author:'',
    releaseYear:'',
    genre:'',
    description:''
  }

  books:BookModel[];

  constructor(private bookService:BookService, private router:Router){
  }

  onSubmit(){
    this.bookService.addBook(this.book).subscribe(response => {this.getAllBooks();
    this.book = {
      id:'',
      name:'',
      author:'',
      releaseYear:'',
      genre:'',
      description:''
    }
    this.router.navigateByUrl('/bookstore/books')
  })
  }


  getAllBooks(){
    this.bookService.getAllBooks().subscribe(response => {this.books = response.result; console.log(this.books)})
  } 

  addBook(book:BookModel){
    this.bookService.addBook(this.book).subscribe(response => this.getAllBooks())
  }

}
