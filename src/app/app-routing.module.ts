import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
 import { HomeComponent } from './components/home/home.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { GestionEditComponent } from './components/gestion-edit/gestion-edit.component';
import { UsersRegisterComponent } from './components/users-register/users-register.component';
import { UsersLoginComponent } from './components/users-login/users-login.component';
import { authGuard } from './core/guards/auth.guards.';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'productos', component: ProductsComponent },
  { path: 'gestion', component: GestionComponent, canActivate: [authGuard] },
  { path: 'gestion/:productoId', component: GestionEditComponent, canActivate: [authGuard] },
  { path: 'registro', component: UsersRegisterComponent },
  { path: 'login', component: UsersLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
