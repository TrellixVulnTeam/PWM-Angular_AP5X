import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { User } from 'src/interfaces/user.class';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public isLogged:any = false;

  constructor(public auth: AngularFireAuth){
    auth.authState.subscribe( user => (this.isLogged = user));
  }

  async SignIn(user:User){
    try{
      return await this.auth.signInWithEmailAndPassword(
        user.correo, 
        user.password
        );
    } catch (err){
      console.log('Error on login', err);
      return null;
    }
  }

  async RegisterNewUser(user:User){
    try{
      return await this.auth.createUserWithEmailAndPassword(
        user.correo, 
        user.password
      );
    } catch (err){
      console.log('Error on register', err);
      return null;
    }
  }
}
