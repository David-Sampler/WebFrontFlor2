import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AnotacoesComponent } from '../anotacoes/anotacoes.component'
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() nome: string



  constructor(private dialog: MatDialog, private serve: ServiceService) { }


  ngOnInit(): void {

  }

  async criar() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = false
    dialogConfig.width = "50%"
    await this.dialog.open(AnotacoesComponent, dialogConfig)
  }

  getUser() {
    this.serve.getAllUser().subscribe((res) => {
      console.log(res)
    })
  }

}
