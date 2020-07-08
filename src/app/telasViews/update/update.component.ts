import { cliente } from './../../model/modelCliente';
import { filter } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  formulario
  escolha

  constructor(private router: Router, private formBuilder: FormBuilder, private service: ServiceService, private route: ActivatedRoute) {
    this.formulario = this.formBuilder.group({
      nome: ["", Validators.required],
      endereco: ["", [Validators.required]],
      telefone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.getFilte()
  }

  getFilte() {

    let id = this.route.snapshot.paramMap.get('id')

    this.service.filtroCli(id).subscribe((res) => {
      console.log(res)
      this.escolha = res
      this.listarUsuario()
    })

  }

  async updateCli() {

    let id = this.escolha._id
    const date = await this.service.updateCliente(id, this.formulario.value)
    console.log(date)
    this.service.openMessagem("Dado atualizado com sucesso", "")
    this.router.navigate(['/tableclientes'])


  }

  listarUsuario() {
    this.formulario.get('nome').setValue(this.escolha.nome);
    this.formulario.get('endereco').setValue(this.escolha.endereco)
    this.formulario.get('email').setValue(this.escolha.email)
    this.formulario.get('telefone').setValue(this.escolha.telefone)
  }



}
