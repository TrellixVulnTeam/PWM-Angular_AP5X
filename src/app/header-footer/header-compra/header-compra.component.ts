import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header-compra',
  templateUrl: './header-compra.component.html',
  styleUrls: ['./header-compra.component.css']
})
export class HeaderCompraComponent {

  constructor(public auth_:AuthService) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      try{
        if(user){
          this.setNombre(user.email?.split('@')[0] + "");    
        }
      }catch(err){
        console.error('Name Error: ' + err);
      }
    });
  }

  setNombre(nombre:string){
    this.auth_.correo = nombre;
  }


}
