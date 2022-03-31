import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginSingupComponent } from './login-singup/login-singup.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path:"categorias", component: CategoriasComponent},
  {path:"login-singup", component: LoginSingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
