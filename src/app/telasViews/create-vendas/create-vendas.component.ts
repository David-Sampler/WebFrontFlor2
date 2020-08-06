import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ResumovendaComponent } from './resumovenda/resumovenda.component';


@Component({
  selector: 'app-create-vendas',
  templateUrl: './create-vendas.component.html',
  styleUrls: ['./create-vendas.component.css']
})



export class CreateVendasComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'cartao' | 'dinheiro' = 'dinheiro';
  disabled = false;

  detalhes

  constructor(private server: ServiceService, private snackBar: MatSnackBar,
    private dialog: MatDialog, private dialogRef: MatDialog) {

  }

  usuarioControl = new FormControl('', Validators.required);
  selectCliente = new FormControl('', Validators.required);
  servicoControl = new FormControl('', Validators.required);

  total
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
    })
  }


  addServico() {

    let selecionado = (this.servicoControl.value)
    this.servFeito.push(selecionado)
    this.somarTotal()
    this.servicoControl.reset()
  }

  somarTotal() {
    let detalhes = 0

    this.servFeito.forEach((res) => {
      detalhes += res.valor

    })

    this.total = detalhes

  }

  finalizarCompra() {
    let data = new Date()
    console.log(data)

    let form = {
      usuario: this.usuarioControl.value.nome,
      cliente: this.selectCliente.value,
      servico: this.servFeito,
      totalVenda: this.total,
      pagamento: this.labelPosition,
      momento: {
        date: data.toLocaleDateString(),
        hora: data.toLocaleTimeString()
      }

    }

    console.log(form)


    localStorage.setItem('total', this.total);

    if (form.usuario == undefined || form.cliente == "") {
      alert("Campos a ser preenchido")
    } else {
      this.server.confirmaVendas(form).subscribe((res) => {
        console.log(res)
      })
    }
    this.openMessagem("Compra finalizada", "")
    this.verificarTroco()
    this.limparCampos()
  }

  limparCampos() {
    this.usuarioControl.reset()
    this.servicoControl.reset()
    this.selectCliente.reset()
    this.servFeito = []
    this.total = 0
  }


  removerComprar(id) {
    console.log(this.servFeito, "ANTES")
    this.servFeito.splice(id, 1)
    console.log(this.servFeito, "depois")
    this.somarTotal()

  }

  openMessagem(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      //horizontalPosition: "start",
      panelClass: "msg-sucess"
    }

    );
  }

  verificarTroco() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = "400px",

      this.dialog.open(ResumovendaComponent, dialogConfig)


  }
}