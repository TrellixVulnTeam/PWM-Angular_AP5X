import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/interfaces/product';
import { JSONService } from './json.service';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor(private db: AngularFirestore,
    public json:JSONService) { }

  async getAllProducts(){
    return new Promise<any>((resolve) => {
      this.db.collection('Objetos')
      .valueChanges({ idField: 'id' })
      .subscribe(users => resolve(users));
    })
  }

  addJSONToFirebase(){
    this.json.getJSONProducts().subscribe((data) => { 
      //Función para agregar productos a la base de datos   
      for (let i = 0; i < data.length; i++) {
        this.addProduct(
          data[i].id,
          data[i].nombre,
          data[i].descripcion,
          data[i].precio,
          data[i].categoria,
          data[i].empresa,
          data[i].mainPhoto,
          data[i].altPhotos
        );
      } 
      
    });
  }

  addProduct(id:number,
    nombre_:string,
    descripcion_:string,
    precio_:number,
    categoria_:string,
    empresa_:string,
    mainPhoto_:string,
    altPhotos_:[]){
      this.db.collection("Objetos")
      .doc(id + "")
      .set({
        nombre:nombre_,
        descripcion:descripcion_,
        precio:precio_,
        categoria:categoria_,
        empresa: empresa_,
        mainPhoto:mainPhoto_,
        altPhotos:altPhotos_
      });
  }
}
