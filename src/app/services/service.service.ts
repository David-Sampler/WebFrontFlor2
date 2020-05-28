import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {cliente} from '../model/modelCliente'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  
   url = "https://app-apiflor.herokuapp.com"

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getClientes():Observable<cliente>{
       return this.http.get<cliente>(this.url+"/allcliente")
  }

}
