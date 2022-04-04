import { Component } from '@angular/core';

@Component({
  selector: 'app-opcion-domicilio',
  templateUrl: './opcion-domicilio.component.html',
  styleUrls: ['../../opciones.css', '../../../catalogo/catalogo.component.css']
})
export class OpcionDomicilioComponent {
  userInfo = {
    nombre:"",
    apellidos:"",
    correo:"",
    telefono:"",
    direccion:"",
    codPostal:"",
    ciudad:"",
    provincia:""
  }
}
