import { cliente } from './../model/modelCliente'
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/modelUsuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessagemComponent } from '../dialog-messagem/dialog-messagem.component'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "https://app-apiflor.herokuapp.com"

  constructor(private http: HttpClient, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // metodos de usuarios
  getAllUser(): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + "/allUser")
  }

  postUsuario(user: Usuario): Observable<Usuario> {
    console.log("chegando aqui")
    return this.http.post<Usuario>(this.url + "/insertUser", user)
  }


  //metodos de clientes
  getClientes(): Observable<cliente> {
    return this.http.get<cliente>(this.url + "/allcliente")
  }

  insertCliente(cli: cliente): Observable<cliente> {
    return this.http.post<cliente>(this.url + "/insertcliente", cli)
  }

  deleteCliente(id: cliente): Observable<cliente> {
    console.log('delete chegou')
    return this.http.delete<cliente>(this.url + '/deletecliente/' + id)
  }

  updateCliente(id, cliente) {

    return this.http.put(this.url + '/atualizarcliente/' + id, cliente).toPromise()

  }

  filtroCli(id): Observable<any> {
    console.log('filto chegou')
    return this.http.get(this.url + '/filtro/' + id)
  }

  //-------------------------------------------//

  //metodos Servicos
   allServicos():Observable<any>{
     console.log("selecionar servico")
     return this.http.get<any>(this.url+"/allservicos")
   }
  
   insertServicos(servico){
         return this.http.post(this.url+'/insertservico',servico).toPromise()
  }

  openMessagem(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition:"start",
      panelClass: "msg-sucess"
    }

    );
  }

  confirmMess() {
    return this.dialog.open(DialogMessagemComponent,
      {
        width: '550px',
        data: { name: 'austin' },        

      });

  }
}




