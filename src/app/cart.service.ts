import { Injectable } from '@angular/core';
import Book from './entity/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  book: Book[]=[];



  addToCart(product: Book) {

    this.book.push(product);

  }



  getItems(){

    return this.book;

  }

  constructor() { }
}
