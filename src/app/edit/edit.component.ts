import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BookService } from '../Service/book.service';
import { BookModel } from '../Model/book-model';

@Component({
  selector: 'app-edit',
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
              <input type="date" name="releaseYear"[ngModel]="book.releaseYear | date:'yyyy-MM-dd'" (ngModelChange)="book.releaseYear=$event">
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
          <button routerLink="/bookstore/details/{{book.id}}" class="btn btn-outline-dark" style="margin-top: 20px;"><i class="fa-solid fa-arrow-left"></i>Back</button>
          <button class="btn btn-success" style="margin-top: 20px; margin-left: 5px;">Save</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
   
  id:any;
  book:BookModel = {
    id:'',
    name:'',
    author:'',
    releaseYear:'',
    genre:'',
    description:''
  }
  
  constructor(private route: ActivatedRoute, private bookService: BookService){
  }

  ngOnInit():void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.getBookById();
  }

  getBookById(){
    this.bookService.getBookByID(this.id).subscribe(book => {this.book = book.result})
  }

  onSubmit(){
    if(this.book.id == this.id){
      this.updateBook(this.book)
      console.log("Works")
    }
  }

  //Updates book
  updateBook(book:BookModel){
    this.bookService.updateBook(this.book).subscribe(book => {this.getBookById()})
  }

}
