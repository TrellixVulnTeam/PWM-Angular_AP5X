import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CestaComponent } from './cesta/cesta/cesta.component';
import { FormCortoComponent } from './cesta/opciones/form-corto/form-corto.component';
import { OpcionDomicilioComponent } from './cesta/opciones/opcion-domicilio/opcion-domicilio.component';
import { OpcionTiendaComponent } from './cesta/opciones/opcion-tienda/opcion-tienda.component';
import { PayComponent } from './cesta/opciones/pay/pay.component';
import { LoginSingupComponent } from './login-signup/login-singup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ObjetoComponent } from './objeto/objeto.component';
import { FavoritosComponent } from './perfil/favoritos/favoritos.component';
import { InicioComponent } from './perfil/inicio/inicio.component';

const routes: Routes = [
  {path:'', component:LoginSingupComponent},
  {path:"catalogo/:user", component: CatalogoComponent},
  {path:"login-singup", component: LoginSingupComponent},
  {path:'cesta', component:CestaComponent},
  {path:'op-tienda', component:OpcionTiendaComponent},
  {path:'op-domicilio', component:OpcionDomicilioComponent},
  {path:'form-tienda', component:FormCortoComponent},
  {path:'pay', component:PayComponent},
  {path:'perfil-inicio', component:InicioComponent},
  {path:'perfil-favoritos', component:FavoritosComponent},
  {path:'objeto/:id', component:ObjetoComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
