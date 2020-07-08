import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';



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
import { CreateClientesComponent } from './telasViews/create-clientes/create-clientes.component';
import { CreateUsuariosComponent } from './telasViews/create-usuarios/create-usuarios.component';
import { CreateServicosComponent } from './telasViews/create-servicos/create-servicos.component';
import { CreateVendasComponent } from './telasViews/create-vendas/create-vendas.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { TableCliComponent } from './telasViews/table-cli/table-cli.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateComponent } from './telasViews/update/update.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogMessagemComponent } from './dialog-messagem/dialog-messagem.component';
import { TableServicosComponent } from './telasViews/table-servicos/table-servicos.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { ContainerComponent } from './component/container/container.component';
import { AutenticacaoComponent } from './component/autenticacao/autenticacao.component';

import {MatSelectModule} from '@angular/material/select';

registerLocaleData(localePt, 'pt');

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
    TableCliComponent,
    UpdateComponent,
    DialogMessagemComponent,
    TableServicosComponent,
    LoginComponent,
    ContainerComponent,
    AutenticacaoComponent,
 
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
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [MatDatepickerModule,{provide: LOCALE_ID, useValue: 'pt'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
