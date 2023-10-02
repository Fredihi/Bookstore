import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../Service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BookModel } from '../Model/book-model';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h1>Book</h1>
      <div class="details">
         <div class="detailsinfo">
          <h4>Name</h4>
          <span>{{book.name}}</span>
          <h4>Author</h4>
          <span>{{book.author}}</span>
          <h4>Release Year</h4>
          <span>{{book.releaseYear | date:'yyyy-MM-dd'}}</span>
          <h4>Genre</h4>
          <span>{{book.genre}}</span>
          <h4>Description</h4>
          <span>{{book.description}}</span>
          <br>
          <button [routerLink]="['/bookstore/books']" class="btn btn-outline-dark" style="margin-top: 20px;"><i class="fa-solid fa-arrow-left"></i>Back</button>
          <button routerLink="/bookstore/edit/{{book.id}}" class="btn btn-warning" style="margin-top: 20px; margin-left: 5px;">Edit</button>
          <button class="btn btn-danger" (click)="deleteBook()" style="margin-top: 20px; margin-left: 5px;">Delete</button>
         </div>
      </div>
    </div>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  title = 'Bookstore';
  id:any;
  book:BookModel = {
    id:'',
    name:'',
    author:'',
    releaseYear:'',
    genre:'',
    description:''
  }
  
  constructor(private route : ActivatedRoute, private bookService: BookService, private router:Router){
  }

  ngOnInit():void {
    this.id = this.route.snapshot.params['id']
    this.getBookById();
  }

  getBookById(){
    this.bookService.getBookByID(this.id).subscribe(book => {this.book = book.result})
  }

  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe(book => (this.getBookById()))
    this.router.navigateByUrl('/bookstore/books')
  }
}
