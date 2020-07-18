import { DialogMessagemComponent } from './../../dialog-messagem/dialog-messagem.component';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-table-cli',
  templateUrl: './table-cli.component.html',
  styleUrls: ['./table-cli.component.css']
})



export class TableCliComponent implements OnInit {


  displayedColumns: string[] = ['position', 'nome', 'endereco', 'telefone', 'email', 'action'];
  dataSource

  constructor(private server: ServiceService, private route: Router, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.getClientes()

  }

  getClientes() {
    this.server.getClientes().subscribe((res) => {
      this.dataSource = res
      console.log(res)
    })
  }

  delCliente(id) {

    this.server.confirmMess().afterClosed().subscribe((resposta) => {
      let res = resposta

      if (res == true) {
        this.server.deleteCliente(id).subscribe(() => {
          this.server.openMessagem("Excluido com sucesso", "")
          this.getClientes()
          this.route.navigate(['/tableclientes'])

        })
      } else {
        console.log('Sair')
      }
    })

  }
}
