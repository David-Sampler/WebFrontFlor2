import { UpdateComponent } from './telasViews/update/update.component';
import { CreateVendasComponent } from './telasViews/create-vendas/create-vendas.component';
import { CreateServicosComponent } from './telasViews/create-servicos/create-servicos.component';
import { CreateUsuariosComponent } from './telasViews/create-usuarios/create-usuarios.component';
import { CreateClientesComponent } from './telasViews/create-clientes/create-clientes.component'


import { VendasComponent } from './views/vendas/vendas.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ServicosComponent } from './views/servicos/servicos.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableCliComponent} from '../app/telasViews/table-cli/table-cli.component'
import { TableServicosComponent } from './telasViews/table-servicos/table-servicos.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "usuarios", component: UsuarioComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "servicos", component: ServicosComponent },
  { path: "vendas", component: VendasComponent },

  { path: 'creatercliente', component: CreateClientesComponent },
  { path: 'createrusuario', component: CreateUsuariosComponent },
  { path: 'createrservicos', component: CreateServicosComponent },
  { path: 'tableservicos', component: TableServicosComponent },

  { path: 'creatervendas', component: CreateVendasComponent },
  
  { path: 'tableclientes', component: TableCliComponent},
  { path: 'updatecliente/:id', component: UpdateComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
