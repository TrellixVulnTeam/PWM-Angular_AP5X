import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { JSONService } from '../../services/json.service';
import { AuthService } from '../../services/auth.service'
import { User } from 'src/interfaces/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-singup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})


export class LoginSingupComponent {
  /* Atributos */

  userLogIn:User = {
    password:"",
    correo:"",
  }

  userRegister:User = {
    password:"",
    correo:"",
  }

  constructor( private http:HttpClient, public auth:AuthService,
    private route: Router) {}

  async register(){
    const x = await this.auth.RegisterNewUser(this.userRegister);
    if(x != null){
      console.log("Usuario " + this.userRegister.correo + " creado exitosamente");
      this.route.navigateByUrl('/catalogo');
    }else{
      console.log("No se pudo crear el usuario")
    }
  }

  async login() {
    const x = await this.auth.SignIn(this.userRegister);
    if(x != null){
      console.log("Usuario " + this.userRegister.correo + " logeado exitosamente");
      this.route.navigateByUrl('/catalogo');
    }else{
      console.log("No se pudo loggear el usuario")
    }
  }
}
