import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/Book';
import { BookService } from 'src/app/book.service';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  book:Book=new Book();
  listBook:Book[]=[];
  router: any;

  search(){
    let obj = Object.fromEntries(Object.entries(this.book).filter(([_, key]) => key != ""));
    this.bookService.searchBook(obj).subscribe(
      resp=>{
        this.listBook=resp as Book[];
        if(this.listBook.length==0){
          alert("No data found");
        }
        console.log(this.listBook);
      },error=>{
        console.log(error);
        alert("Error fetching data")
      }
    )
  }
  addToCart(book){
    this.cartService.addToCart(book);

    window.alert('Your product has been added to the cart!');
    this.router.navigate(['cart']);
  }


  constructor(private bookService:BookService ,private cartService:CartService) { }

  ngOnInit(): void {
  }

}
