import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CestaComponent } from './Cesta/cesta/cesta.component';
import { FormCortoComponent } from './Cesta/opciones/form-corto/form-corto.component';
import { OpcionDomicilioComponent } from './Cesta/opciones/opcion-domicilio/opcion-domicilio.component';
import { OpcionTiendaComponent } from './Cesta/opciones/opcion-tienda/opcion-tienda.component';
import { PayComponent } from './Cesta/opciones/pay/pay.component';
import { LoginSingupComponent } from './login-singup/login-singup.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component:LoginSingupComponent},
  {path:"catalogo", component: CatalogoComponent},
  {path:"login-singup", component: LoginSingupComponent},
  {path:'cesta', component:CestaComponent},
  {path:'op-tienda', component:OpcionTiendaComponent},
  {path:'op-domicilio', component:OpcionDomicilioComponent},
  {path:'form-tienda', component:FormCortoComponent},
  {path:'pay', component:PayComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
