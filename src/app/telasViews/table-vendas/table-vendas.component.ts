import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from 'src/app/services/service.service';
import { filter, map } from 'rxjs/operators';
import { interval, Subscriber } from 'rxjs';
import { cliente } from 'src/app/model/modelCliente';
import { report } from 'process';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table-vendas',
  templateUrl: './table-vendas.component.html',
  styleUrls: ['./table-vendas.component.css']
})

export class TableVendasComponent implements OnInit {

  dados2 = []

  dado3
  ELEMENT_DATA: any[]

  displayedColumns: string[] = ['position', 'user', 'cliente', 'valorTotal', 'detalhe'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private server: ServiceService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.dados2)
    this.getVendas()
  }

  getVendas() {



    this.server.getVendas().subscribe((res) => {

      res.forEach(element => {

        let filtro = {
          user: element.usuario,
          cliente: element.cliente.nome,
          valorTotal: element.totalVenda,
          detalhe: element._id
        }
        this.dados2.push(filtro)

      })
      this.dataSource.data = this.dados2
    })
  }

  getDetalhe(detalhe) {
    console.log(detalhe)
    this.server.getOneVenda(detalhe).subscribe((res) => {
      console.log(res)
      this.dado3 = res
      this.router.navigate([`/detalhevendas/ ${this.dado3._id}`])

    }
    )



  }
}