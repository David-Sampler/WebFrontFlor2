import { CreateVendasComponent } from './telasViews/create-vendas/create-vendas.component';
import { CreateServicosComponent } from './telasViews/create-servicos/create-servicos.component';
import { CreateUsuariosComponent } from './telasViews/create-usuarios/create-usuarios.component';
import { CreateClientesComponent } from './component/telasViews/create-clientes/create-clientes.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ServicosComponent } from './views/servicos/servicos.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"usuarios",component:UsuarioComponent},
  {path:"clientes",component:ClientesComponent},
  {path:"servicos",component:ServicosComponent},
  {path:"vendas",component:VendasComponent},
  
  {path:'creatercliente',component:CreateClientesComponent},
  {path:'createrusuario',component:CreateUsuariosComponent},
  {path:'createrservicos',component:CreateServicosComponent},
  {path:'creatervendas',component:CreateVendasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
