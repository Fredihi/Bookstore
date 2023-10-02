;
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksComponent } from './books/books.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { NoBooksComponent } from './no-books/no-books.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    EditComponent,
    AddComponent,
    HomeComponent,
    FilterPipeComponent,
    NoBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
