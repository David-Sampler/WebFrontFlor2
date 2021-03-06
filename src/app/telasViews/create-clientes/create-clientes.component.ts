import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { ServiceService } from '../../services/service.service'
@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {

  formulario: FormGroup


  constructor(private router: Router, private formBuilder: FormBuilder, private service: ServiceService) { }


  data = new Date()

  ngOnInit(): void {
    this.configForm()
    this.formulario.reset()
    console.log(this.data)
  }

  configForm() {
    this.formulario = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(5)]],

      /*endereco: this.formBuilder.group({
        rua: ["", Validators.required],
        numero: ["", Validators.required],
        complemento: ["", Validators.required]
      }),*/

      telefone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      nascimento: ["", Validators.required]
    })
  }

  createCliente() {
    console.log(this.formulario.value)
    //this.service.insertCliente(this.formulario.value).subscribe((res) => this.exibirMsg())
    //this.formulario.reset()
  }

  btnCancel() {
    alert("BtnCancel")
    this.router.navigate(['/usuarios'])
  }

  exibirMsg() {
    this.service.openMessagem("Cliente Cadastrado", "Muito obrigado")
  }

  peganome(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement>evento.target).value)
  }


}
