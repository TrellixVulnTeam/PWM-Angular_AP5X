import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { JSONService } from '../services/json.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  
  url:string = "../../assets/datos/objetos.json";

  productos:any = [];

  constructor(public json:JSONService){
    this.json.getJSONProducts(this.url)
            .subscribe( resp => {
               let aux:any = resp;
			   this.productos = aux.Productos;
               console.log(this.productos);
            });
  }

}
