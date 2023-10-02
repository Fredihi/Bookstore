import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { NoBooksComponent } from './no-books/no-books.component';


const routes: Routes = [
  {
    path: "bookstore", 
    component: AppComponent, 
    children: 
    [{ path:'', redirectTo: './home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'books', component: BooksComponent},
    { path: 'details/:id', component: DetailsComponent},
    { path: 'edit/:id', component: EditComponent},
    { path: 'add', component: AddComponent},
    { path: 'no-books', component:NoBooksComponent}
  ]
  },
  {
    path:"**", redirectTo: "bookstore"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
