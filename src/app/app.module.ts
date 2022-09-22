import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BookCreateComponent } from './Components/create-books/create-books.component';
import { FormsModule } from '@angular/forms';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { LoginComponent } from './Components/login-page/login-page.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { UpdateBooksComponent } from './Components/update-books/update-books.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DeleteBooksComponent } from './Components/delete-books/delete-books.component';
import { SearchBooksByAuthorComponent } from './Components/search-books-by-author/search-books-by-author.component';
import { DashboardReaderComponent } from './Components/dashboard-reader/dashboard-reader.component';
import { CartComponent } from './Components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
  
    BookCreateComponent,
    SearchBooksComponent,
    LoginComponent,

    DashboardComponent,
    AboutusComponent,
    UpdateBooksComponent,
    SignupComponent,
    DeleteBooksComponent,
    SearchBooksByAuthorComponent,
    DashboardReaderComponent,
    CartComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
