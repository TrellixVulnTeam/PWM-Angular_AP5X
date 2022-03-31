import { HttpClient } from '@angular/common/http'; 
import { Component } from '@angular/core';

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
  constructor( private http:HttpClient) { 
    console.log("Servicio corriendo");
    http.get("../../assets/datos/usuarios.json")
      .subscribe( resp => {
        this.users = resp;
        this.cargada=true;
      });
  }

  LogIn(){}

}