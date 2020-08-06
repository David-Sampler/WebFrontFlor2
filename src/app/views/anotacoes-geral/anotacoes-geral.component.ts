import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-anotacoes-geral',
  templateUrl: './anotacoes-geral.component.html',
  styleUrls: ['./anotacoes-geral.component.css']
})
export class AnotacoesGeralComponent implements OnInit {

  constructor(private serve: ServiceService) { }
  dados
  ngOnInit(): void {
    this.allMensagens()

  }

  allMensagens() {
    this.serve.allAnotacoes().subscribe((res) => {
      this.dados = res

      console.log(res)
      setTimeout((
        this.dados = res
      ), 1000)
    }

    )
  }

  delanotacao(id) {
    this.serve.deletarAnotacao(id).subscribe((res) => {
      console.log(res)
      this.allMensagens()
    })

  }

}

