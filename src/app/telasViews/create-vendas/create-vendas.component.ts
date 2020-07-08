import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { isNull } from 'util';

@Component({
  selector: 'app-create-vendas',
  templateUrl: './create-vendas.component.html',
  styleUrls: ['./create-vendas.component.css']
})



export class CreateVendasComponent implements OnInit {

  nome = "david"

  constructor(private server: ServiceService) {

  }


  usuarioControl = new FormControl('', Validators.required);
  selectCliente = new FormControl('', Validators.required);
  servicoControl = new FormControl('', Validators.required);




  total = 0
  clientes
  usuarios
  servico

  servFeito = []

  ngOnInit(): void {

    this.getClientes()
    this.getUser()
    this.getServicos()
    this.somarTotal()

  }

  getUser() {
    this.server.getAllUser().subscribe((res) => {
      this.usuarios = res
    })
  }

  getClientes() {
    this.server.getClientes().subscribe((res) => {
      this.clientes = res
      console.log(res)
    })
  }

  getServicos() {
    this.server.allServicos().subscribe((res) => {
      this.servico = res
      console.log(res)
    })
  }


  addServico() {

    let selecionado = (this.servicoControl.value)
    console.log(selecionado)
    this.servFeito.push(selecionado)
    this.somarTotal()
    this.servicoControl.reset()
  }

  somarTotal() {
    let detalhes = 0

    this.servFeito.forEach((res) => {

      console.log(res.valor)
      detalhes += res.valor

    })

    this.total = detalhes

  }

  finalizarCompra() {
    
    let form = {
      usuario: this.usuarioControl.value.nome,
      cliente: this.selectCliente.value,
      servico: this.servFeito
    }
    

    console.log(form)

    if(form.usuario == undefined || form.cliente=="" ){
          alert("Campos a ser preenchido")
    }else{
      this.server.confirmaVendas(form).subscribe((res) => {
        console.log(res)
      })
    }
   
  }







  removerComprar(id) {
    console.log(this.servFeito, "ANTES")
    this.servFeito.splice(id,1)
    console.log(this.servFeito, "depois")
    this.somarTotal()
  
  }
}