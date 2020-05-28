import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';

1
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ServicosComponent } from './views/servicos/servicos.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { CreateClientesComponent } from './component/telasViews/create-clientes/create-clientes.component';
import { CreateUsuariosComponent } from './telasViews/create-usuarios/create-usuarios.component';
import { CreateServicosComponent } from './telasViews/create-servicos/create-servicos.component';
import { CreateVendasComponent } from './telasViews/create-vendas/create-vendas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UsuarioComponent,
    ClientesComponent,
    ServicosComponent,
    VendasComponent,
    CreateClientesComponent,
    CreateUsuariosComponent,
    CreateServicosComponent,
    CreateVendasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
