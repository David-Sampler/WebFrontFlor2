import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
data
  constructor() { }

  ngOnInit(): void {
  }


  verificar(){
    alert(this.data.day())
 }

}

