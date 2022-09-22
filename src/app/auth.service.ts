import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AuthResponse from './entity/authResponse';
import LogInRequest from './entity/loginRequest';
import SignupRequest from './entity/SignUpRequest';

const LOGIN_BASE_URL="http://localhost:8085/book";
const LOGIN_BASE_URL1="http://localhost:8085/book/signin/"
const LOGIN_BASE_URL_BUYBOOK="http://localhost:8085/book/buybook";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(auth:LogInRequest){
    return this.http.get<AuthResponse>(LOGIN_BASE_URL1+auth.email+"/"+auth.password);
  }

  checkduplicateUser(auth:SignupRequest){
    return this.http.post(LOGIN_BASE_URL+"/checkDuplicate",auth);
  }

  createUser(auth:SignupRequest){
    
    return this.http.post<AuthResponse>(LOGIN_BASE_URL+"/signup",auth);
  }

  orderBook(buyBook:{paymentid:string;readerName:string;readerEmailId:string;bId:number;})

  {     

return this.http.post(LOGIN_BASE_URL_BUYBOOK,buyBook);

}



  constructor(private http:HttpClient) { }
}