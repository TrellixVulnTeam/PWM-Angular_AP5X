import { Component } from '@angular/core';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent {

  public productos:any = [];

  constructor(private dbService:FirestoreService){
    this.dbService.getAllProducts()
    .then(data => {
      this.productos = data;
    });
  }
}
