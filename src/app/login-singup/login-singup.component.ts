import { HttpClient } from '@angular/common/http'; 
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-singup',
  templateUrl: './login-singup.component.html',
  styleUrls: ['./login-singup.component.css']
})


export class LoginSingupComponent {

  userLogIn = {
    password:"",
    correo:"",
  }

  userRegister = {
    nombre:"",
    password:"",
    correo:"",
  }

  users:any = {};
  cargada = false;

  constructor( private http:HttpClient) { }
  
  LogIn = function(){};

}
