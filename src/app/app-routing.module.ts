import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from 'src/app/Components/create-books/create-books.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { LoginComponent } from './Components/login-page/login-page.component';
import { DashboardReaderComponent } from './Components/dashboard-reader/dashboard-reader.component'; 
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UpdateBooksComponent } from './Components/update-books/update-books.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DeleteBooksComponent } from './Components/delete-books/delete-books.component';
import { SearchBooksByAuthorComponent } from './Components/search-books-by-author/search-books-by-author.component';
import { CartComponent } from './Components/cart/cart.component';
const routes: Routes = [{path:'createBooks', component:BookCreateComponent}, {path: 'searchBooks' , component:SearchBooksComponent},{path:"", redirectTo:"login", pathMatch:"full"},
{path:"login", component:LoginComponent},{path:"cart",component:CartComponent}, {path:"signUp",component:SignupComponent},{path:"dashboard-reader",component:DashboardReaderComponent},{path:"aboutus", component: AboutusComponent},
{path:"dashboard", component:DashboardComponent},{path:"searchByAuthor",component:SearchBooksByAuthorComponent},{path:"deleteBooks", component:DeleteBooksComponent} ,{path:"updatebooks",component : UpdateBooksComponent}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
