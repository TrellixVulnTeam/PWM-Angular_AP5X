import { Component } from '@angular/core';

@Component({
  selector: 'app-form-corto',
  templateUrl: './form-corto.component.html',
  styleUrls: ['../../opciones.css']
})
export class FormCortoComponent {
  userInfo = {
    nombre:"",
    apellidos:"",
    correo:"",
    telefono:""
  }

  constructor() { }
}
