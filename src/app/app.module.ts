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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderCompraComponent,
    LoginSingupComponent,
    CatalogoComponent,
    NotFoundComponent
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
