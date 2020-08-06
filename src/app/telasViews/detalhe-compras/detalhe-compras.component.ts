import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-detalhe-compras',
  templateUrl: './detalhe-compras.component.html',
  styleUrls: ['./detalhe-compras.component.css']
})
export class DetalheComprasComponent implements OnInit {

  dados
  servicos = []
  data
  constructor(private router: ActivatedRoute, private server: ServiceService) {

  }

  ngOnInit(): void {
    this.getUser()

  }

  getUser() {
    let id = this.router.snapshot.paramMap.get('id')
    console.log(id.trim())

    this.server.getOneVenda(id.trim()).subscribe((res) => {
      this.dados = res
      this.servicos = res.servico
      this.data = res.criado.split("T")[0].split('-').reverse().join('/')
      console.log(this.dados)
    }

    )



  }



}
