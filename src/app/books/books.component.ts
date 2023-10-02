import { Component } from '@angular/core';
import { BookModel} from '../Model/book-model'
import { BookService } from '../Service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  title = 'Bookstore';

  books:BookModel[] = [];

  filteredBooks:BookModel[];
  searchText = '';

  book:BookModel = {
    id:'',
    name:'',
    author:'',
    releaseYear:'',
    genre:'',
    description:''
  }
  constructor(private bookService : BookService, private router:Router){
  }

  //Initializes all the books when we run the program so we get data from database
  public async ngOnInit(){
    this.getAllBooks();
  }
  getAllBooks(){
    const book = this.bookService.getAllBooks().subscribe(response => {this.books = response.result; console.log(this.books)})
    return book;
  }

  // filterBooks(text:string){
  //   this.filteredBooks = this.books.filter(
  //     book => book?.name.toLowerCase().includes(text.toLowerCase())
  //     );
  //   console.log(this.filteredBooks)
  //  }
  //  handleSearch = (searchInput: string) => {
    
  //   this.filteredBooks = this.books.filter(function(book){
  //     return book.name.toLowerCase().includes(searchInput.toLowerCase());
  //   })
  //   console.log(this.filteredBooks)
  //   this.books = this.filteredBooks;
  //   if(searchInput.length === 0){
  //     this.getAllBooks();
  //   }
  //  }


}

