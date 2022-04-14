import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { JSONService } from '../../services/json.service';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login-singup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
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

  users:Observable<any[]>;
  id:number = 0;

  constructor( private http:HttpClient, public json_:JSONService,
      public firestore: AngularFirestore, public auth:AuthService) {
      this.users= firestore.collection('usuarios').valueChanges();
      this.users.forEach((u) => {
        for(let i = 0; i < u.length; i++){
          this.id = u.length
        }
      })
   }

  register(){
    var x = this.auth.RegisterNewUser(this.userRegister.correo, this.userRegister.password);
    console.log(x);
  }

  login() {
    var x = this.auth.SignIn(this.userLogIn.correo, this.userLogIn.password);
    console.log(x);
  }
}
