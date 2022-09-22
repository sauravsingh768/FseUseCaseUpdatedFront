import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Book from './entity/Book';


const BASE_URL = "http://localhost:8085/book/saveauthor";
const BASE_URL1 = "http://localhost:8085/book/allbooks";
const BASE_URL_4="http://localhost:9091/reader/searchBook/book";

const URL_FOR_UPDATING_BOOK = "http://localhost:8085/book/update/";

const SEARCH_BBOK_BY_ID = "http://localhost:9091/reader/searchBookById/";
const BASE_URL_READER="http://localhost:8085";
const BASE_URL_6 = "http://localhost:8085/book/getbookByAuthor/";
const BASE_URL_3 ="http://localhost:8085/book/book/"

const aid= 1;
@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks()
  {
    return this.http.get(BASE_URL1)
  }
  createBook(book: {title:string; category:string; publisher:string; price:number; active:Boolean;image:string;content:string;releasedDate:Date;authorName:string}){
    return this.http.post(BASE_URL,book);
  }
  searchBook(book:any){
    return this.http.post<Book[]>(BASE_URL_READER+"/book/searchBook",book);
  }

  updateBook(bt, bid) {
    return this.http.put(URL_FOR_UPDATING_BOOK+ bt.bookId, bt);
  }
  constructor(public http: HttpClient) { }
  deleteBooks(bookId) {
    return this.http.delete(BASE_URL_3 + bookId );
  }
  searchBooksByAuthor(authorName) {
    return this.http.get(BASE_URL_6 + authorName);
  }
}
