import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './header-footer/my-footer/my-footer.component';
import { HeaderCompraComponent } from './header-footer/header-compra/header-compra.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginSingupComponent } from './login-singup/login-singup.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderCompraComponent,
    CategoriasComponent,
    LoginSingupComponent
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
