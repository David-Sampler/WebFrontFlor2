import { ServiceService } from './../../services/service.service';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-servicos',
  templateUrl: './create-servicos.component.html',
  styleUrls: ['./create-servicos.component.css']
})
export class CreateServicosComponent implements OnInit {

  formulario: FormGroup
  contador = 1

  constructor(private form: FormBuilder, private server: ServiceService) {

  }

  ngOnInit(): void {
    this.formulario = this.form.group({
      tipo: ["", [Validators.required]],
      valor: ["", [Validators.required]]
    })
  }


  async createServico() {
    console.log(this.formulario.value)
    const servico = await this.server.insertServicos(this.formulario.value)
    console.log(servico)
    this.server.openMessagem("Serviço Cadastrado com sucesso", "")
    this.limparCampos()


  }

  limparCampos() {
    this.formulario.reset()
  }



}
