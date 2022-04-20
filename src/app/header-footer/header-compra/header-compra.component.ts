import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-compra',
  templateUrl: './header-compra.component.html',
  styleUrls: ['./header-compra.component.css']
})
export class HeaderCompraComponent {

  nombre = "";
  constructor() {}

  setNombre(nombre:string){
    this.nombre = nombre;
  }


}
