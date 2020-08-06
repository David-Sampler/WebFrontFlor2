import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AnotacoesComponent } from '../anotacoes/anotacoes.component'
import { ServiceService } from 'src/app/services/service.service';
import { AnotacoesGeralComponent } from '../anotacoes-geral/anotacoes-geral.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() nome: string


  mensagens: any

  constructor(private dialog: MatDialog, private serve: ServiceService) { }


  ngOnInit(): void {
    this.getanotacoes()
  }

  criar() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = false
    dialogConfig.width = "50%"
    this.dialog.open(AnotacoesComponent, dialogConfig)
  }


  getUser() {
    this.serve.getAllUser().subscribe((res) => {
      console.log(res)
    })
  }

  getanotacoes() {
    this.serve.allAnotacoes().subscribe((res) => {
      console.log(res)
      this.mensagens = res.length
    })
  }
  painelMensagens() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = "100%",
      dialogConfig.height = "80%"
    this.dialog.open(AnotacoesGeralComponent, dialogConfig)
  }

}
