import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public RegisterNewUser(email:string, passwd:string){
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, passwd)
    .then((userCredentials) => {
      const user = userCredentials.user;
      alert(user)
    }).catch((error) => {
      const errorCOde = error.code;
      const errorMEssage = error.message;
      alert(errorMEssage)
    });
  }

  public SignIn(email:string, passwd:string){
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, passwd)
    .then((userCredentials) => {
      const user = userCredentials.user;
      alert(user)
    }).catch((error) => {
      const errorCOde = error.code;
      const errorMEssage = error.message;
      alert(errorMEssage)
    });
  }
}
