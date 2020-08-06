import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.component.html',
  styleUrls: ['./anotacoes.component.css']
})

export class AnotacoesComponent implements OnInit {
  selectedValue: string;

  date = new Date()

  dataSource: any[] = [];

  obj

  constructor(private server: ServiceService, private router: Router) { }

  titulo = new FormControl('', Validators.required);
  texto = new FormControl('', Validators.required);
  usuario = new FormControl('', Validators.required)


  usuarios

  ngOnInit(): void {
    this.user()

  }

  user() {
    this.server.getAllUser().subscribe((res) => {
      this.dataSource = res
      console.log(this.dataSource)
    })

  }

  insertAnotacao() {

    let form = {
      titulo: this.titulo.value,
      texto: this.texto.value,
      usuario: this.usuario.value.nome,
      data: this.date
    }
    console.log(form)

    this.server.insertAnotacao(form).subscribe((res) => {
      console.log(res)

    })




  }



}
