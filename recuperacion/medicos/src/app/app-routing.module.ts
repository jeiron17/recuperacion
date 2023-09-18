import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent,} from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { RegistroMedicoComponent } from './registro-medico/registro-medico.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
  {path:'registro',component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path:'registro_medico',component:RegistroMedicoComponent},
  {path:'navegacion',component:NavegacionComponent},
  {path:'listar',component:ListarComponent},
  {path:'editar',component:EditarComponent},
  { path: '**', redirectTo: '/registro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
