import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import BuyBook from 'src/app/entity/BuyBook';
import Book from 'src/app/entity/Book';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

 
  Book:Book[]=[];
  orderbook=this.cartService.getItems();

  buyBook:BuyBook = new BuyBook();

  orderBook(buyBook){

    console.log(buyBook);

    const observable =this.authService.orderBook(buyBook);





    observable.subscribe((response)=> {

      console.log(response);
      alert("Thankyou Nishant for buying the book");

      window.location.href= "/searchbook";

    },

      function(error) {

        console.log(error);

        alert("Something went wrong");

      }

    );
    }
  saveReaderDetails(buyBook){

    this.orderbook= this.cartService.getItems();

   



    for(let i = 0; i < this.orderbook.length;i++){

      buyBook.bId= this.orderbook[i].bookId;

      buyBook.price= this.orderbook[i].price;



      this.orderBook(buyBook);

    }

    console.log(buyBook);



    // this.orderBook(buyBook);



  }

  constructor(private authService:AuthService , private cartService:CartService) { 
    
  }

  ngOnInit(): void {
  }

}
