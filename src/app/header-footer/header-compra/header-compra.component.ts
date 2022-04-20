import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-header-compra',
  templateUrl: './header-compra.component.html',
  styleUrls: ['./header-compra.component.css']
})
export class HeaderCompraComponent {

  nombre = "";

  constructor() {
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
    this.nombre = nombre;
  }


}
