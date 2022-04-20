import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JSONService } from 'src/services/json.service';
@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private json:JSONService) { }
  
  private objeto:any;
  
  private productos:any;
  private altIMG:any;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    
    this.json.getJSONProducts()
      .subscribe( resp => {
        let aux:any = resp;
        this.productos=aux.Productos;
        console.log(id);
        this.objeto = this.productos[id];
        console.log(this.objeto);

        document.getElementById("mainPhoto")?.setAttribute("src", this.objeto.mainPhoto);
        document.getElementById('objName')!.textContent = this.objeto.nombre;
        document.getElementById("precio")!.textContent = this.objeto.precio + "€";
        document.getElementById("empresa")!.textContent = this.objeto.empresa;
        const altPhotos = document.getElementById("altPhotos");
        for(let i = 0; i< this.objeto.altPhotos; i++){
          
        }
    });
  }

}
