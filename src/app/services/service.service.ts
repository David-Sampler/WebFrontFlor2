import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {cliente} from '../model/modelCliente'
import { Usuario } from '../model/modelUsuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  
   url = "https://app-apiflor.herokuapp.com"

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

// metodos de usuarios
  getAllUser():Observable<Usuario>{
    return this.http.get<Usuario>(this.url+"/allUser")
  }

  postUsuario(user:Usuario):Observable<Usuario>{
    console.log("chegando aqui")
    return this.http.post<Usuario>(this.url+"/insertUser", user)
  }



 //metodos de clientes
  getClientes():Observable<cliente>{
    return this.http.get<cliente>(this.url+"/allcliente")
  }
}




