import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-servicos',
  templateUrl: './table-servicos.component.html',
  styleUrls: ['./table-servicos.component.css']
})
export class TableServicosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nome', "valor","action"];
  dataSource
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.todosServicos()
  }


  todosServicos(){
   return this.service.allServicos().subscribe((res)=>{console.log(res)})
  }

  delServicos(){

  }

}
