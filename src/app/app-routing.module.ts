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
import { TableCliComponent } from '../app/telasViews/table-cli/table-cli.component'
import { TableServicosComponent } from './telasViews/table-servicos/table-servicos.component';
import { LoginComponent } from './component/login/login.component';
import { ContainerComponent } from './component/container/container.component';
import { MenuComponent } from './component/menu/menu.component';
import { AuthGuard } from './shared/auth.guard';
import { TableVendasComponent } from './telasViews/table-vendas/table-vendas.component';
import { DetalheComprasComponent } from './telasViews/detalhe-compras/detalhe-compras.component';
import { CreateCombosComponent } from './telasViews/create-combos/create-combos.component';



const routes: Routes = [

  {
    path: "", component: ContainerComponent,

    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "usuarios", component: UsuarioComponent },
      { path: "clientes", component: ClientesComponent },
      { path: "servicos", component: ServicosComponent },
      { path: "vendas", component: VendasComponent },

      { path: 'creatercliente', component: CreateClientesComponent },
      { path: 'createrusuario', component: CreateUsuariosComponent },
      { path: 'createrservicos', component: CreateServicosComponent },
      { path: 'tableservicos', component: TableServicosComponent },

      { path: 'creatervendas', component: CreateVendasComponent },
      { path: 'combos', component: CreateCombosComponent },
      { path: 'tableclientes', component: TableCliComponent },
      { path: 'updatecliente/:id', component: UpdateComponent },
      { path: "tablevendas", component: TableVendasComponent },
      { path: 'detalhevendas/:id', component: DetalheComprasComponent }

    ],
    canActivate: [AuthGuard]
  },
  {
    path: "login", component: LoginComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
