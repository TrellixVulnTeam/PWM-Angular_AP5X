import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './header-footer/my-footer/my-footer.component';
import { HeaderCompraComponent } from './header-footer/header-compra/header-compra.component';
import { LoginSingupComponent } from './login-singup/login-singup.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CestaComponent } from './Cesta/cesta/cesta.component';
import { ListaDeOpcionesComponent } from './Cesta/basic-components/lista-de-opciones/lista-de-opciones.component';
import { OpcionTiendaComponent } from './Cesta/opciones/opcion-tienda/opcion-tienda.component';
import { OpcionDomicilioComponent } from './Cesta/opciones/opcion-domicilio/opcion-domicilio.component';
import { CarritoCostoComponent } from './Cesta/basic-components/carrito-costo/carrito-costo.component';
import { FormCortoComponent } from './Cesta/opciones/form-corto/form-corto.component';
import { PayComponent } from './Cesta/opciones/pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderCompraComponent,
    LoginSingupComponent,
    CatalogoComponent,
    NotFoundComponent,
    CestaComponent,
    ListaDeOpcionesComponent,
    OpcionTiendaComponent,
    OpcionDomicilioComponent,
    CarritoCostoComponent,
    FormCortoComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
