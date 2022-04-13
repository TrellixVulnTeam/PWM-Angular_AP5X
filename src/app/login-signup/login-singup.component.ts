import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { JSONService } from '../../services/json.service';

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
      public firestore: AngularFirestore) {
      this.users= firestore.collection('usuarios').valueChanges();
      this.users.forEach((u) => {
        this.id = u.length;
      })
   }

  async register(){
    if(!this.exists(this.userRegister.correo.trim())){
      this.firestore.collection("usuarios").doc(this.id+"").set({
        nombre: this.userRegister.nombre,
        correo: this.userRegister.correo,
        password: this.userRegister.password,
        lista_Fav:[],
        lista_Compra:[]
      }).then(() => {
        alert("Usuario " + this.userRegister.nombre + " creado");
      });
    }else{
      alert("Ya existe un usuario con ese correo.")
    }
  }

  
  protected exists(correo:string):boolean{
    this.users.forEach((u) => {
      for( let i = 0; i < u.length; i++){
        if(u[i].correo == correo){
          return true;
        }
      }
      return false;
    });
    return false;
  }

  login() {
    
  }

}
