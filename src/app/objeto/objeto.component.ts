import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/services/firestore.service';
import { JSONService } from 'src/services/json.service';
@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private json:JSONService, 
    private dbService:FirestoreService){
  }
  public objeto:any;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    const productos = this.dbService.getAllProducts();
    productos.then((data) => {
      this.objeto = data[id];
      console.log(this.objeto)
    })
  }

  refresh():void { window.location.reload(); }
}
