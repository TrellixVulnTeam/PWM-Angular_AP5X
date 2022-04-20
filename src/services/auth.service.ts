import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence} from 'firebase/auth'
import { User } from 'src/interfaces/user.class';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public isLogged:any = false;

  constructor(public auth: AngularFireAuth, public router:Router){
    auth.authState.subscribe( user => (this.isLogged = user));
  }

  async SignIn(user:User){
    try{
      return await this.auth.signInWithEmailAndPassword(
        user.correo.toString().toLowerCase().trim(), 
        user.password
      );
    } catch (err){
      console.error('Error on login', err);
      return null;
    }
  }

  async RegisterNewUser(user:User){
    try{
      return await this.auth.createUserWithEmailAndPassword(
        user.correo.toString().toLowerCase().trim(), 
        user.password
      );
    } catch (err){
      console.error('Error on register', err);
      return null;
    }
  }
 
}
