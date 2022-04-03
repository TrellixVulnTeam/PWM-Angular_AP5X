import { HttpClient } from '@angular/common/http'; 
import { Component } from '@angular/core';
import { JSONService } from '../../services/json.service';

@Component({
  selector: 'app-login-singup',
  templateUrl: './login-singup.component.html',
  styleUrls: ['./login-singup.component.css']
})


export class LoginSingupComponent {
  /* Atributos */
  userLogIn = {
    password:"",
    correo:"",
  }

  userRegister = {
    nombre:"",
    password:"",
    correo:"",
  }

  users:any;
  json:JSONService
  cargada = false;

  constructor( private http:HttpClient, public json_:JSONService) {
    this.json = json_;
   }

  register(){
    this.json.getJSONUsers().subscribe( (resp:any) => {
      this.users = resp.Usuarios
      if(this.exists()){
        console.log("Ya existe usuario con ese correo")
      }else{
        console.log("Podrá ser añadido")
      }
    });
  }

  
  protected exists():boolean{
    console.log(this.userRegister)
    for(let i = 0; i < this.users.length; i++){
      if((this.users[i].correo) == (this.userRegister.correo)){
        return true;
      }
    }
    return false;
  }



}
