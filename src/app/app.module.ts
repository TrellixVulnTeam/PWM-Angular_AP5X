import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

/* Firebase */
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';
/*****/

import { AppComponent } from './app.component';
import { FooterComponent } from './header-footer/my-footer/my-footer.component';
import { HeaderCompraComponent } from './header-footer/header-compra/header-compra.component';
import { LoginSingupComponent } from './login-signup/login-singup.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CestaComponent } from './cesta/cesta/cesta.component';
import { ListaDeOpcionesComponent } from './cesta/basic-components/lista-de-opciones/lista-de-opciones.component';
import { OpcionTiendaComponent } from './cesta/opciones/opcion-tienda/opcion-tienda.component';
import { OpcionDomicilioComponent } from './cesta/opciones/opcion-domicilio/opcion-domicilio.component';
import { CarritoCostoComponent } from './cesta/basic-components/carrito-costo/carrito-costo.component';
import { FormCortoComponent } from './cesta/opciones/form-corto/form-corto.component';
import { PayComponent } from './cesta/opciones/pay/pay.component';
import { InicioComponent } from './perfil/inicio/inicio.component';
import { FavoritosComponent } from './perfil/favoritos/favoritos.component';
import { ObjetoComponent } from './objeto/objeto.component';
import { AddObjectComponent } from './add-object/add-object.component';

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
    PayComponent,
    InicioComponent,
    FavoritosComponent,
    ObjetoComponent,
    AddObjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
