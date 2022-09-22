import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';
import { AuthService } from 'src/app/auth.service';
import AuthResponse from 'src/app/entity/authResponse';
import LogInRequest from 'src/app/entity/loginRequest';



@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginComponent implements OnInit {

  auth:LogInRequest=new LogInRequest();
  loginResponse:AuthResponse=new AuthResponse();

  checkLogin(){
  //   this.logInService.login(this.auth).subscribe(
  //    resp=>{
  //       this.loginResponse=resp;
  //       if(resp.role=="Author"){
  //         alert("Author Login Successfull");
  //         sessionStorage.setItem('role',resp.role);
  //         sessionStorage.setItem('username',resp.user.userName);
  //         this.router.navigate(['dashboard']);
  //       } 
  //     },
  //     err=>{
  //       this.loginResponse=err;
  //       alert("Error ");
  //     }
  //   )
  // }
  this.logInService.login(this.auth).subscribe(
    resp=>{
      
      // this.loginResponse=resp;
      //  alert("Login Successful");
      //  this.router.navigate(['dashboard']);
      console.log(resp);
      if(resp as unknown==1) {
        alert("Author Login Successful");
        this.router.navigate(['dashboard']);
      }
      else if(resp as unknown==2)
      {
        alert("Reader Login Successful");
        this.router.navigate(['dashboard-reader']);
     }
     else 
      {
        alert("Invalid Username or password");
       
     }
    },
    err=>{
      this.loginResponse=err;
      alert("Something went wrong");
    }
  )
}

  constructor(private logInService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

}