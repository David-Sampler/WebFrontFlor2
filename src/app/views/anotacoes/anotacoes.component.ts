import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.component.html',
  styleUrls: ['./anotacoes.component.css']
})

export class AnotacoesComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];



  constructor(private server: ServiceService) { }

  titulo = new FormControl('', Validators.required);
  texto = new FormControl('', Validators.required);
  serviceControl = new FormControl('', Validators.required)

  dataSource
  usuarios

  ngOnInit(): void {
    this.user()
    this.pegardados()
  }


  pegardados() {
    let obj = {
      titulo: this.titulo.value,
      texto: this.texto.value,
      usuario: this.serviceControl.value
    }

    console.log(obj)
  }

  user() {
    this.server.getAllUser().subscribe((res) => {
      this.dataSource = res
      console.log(this.dataSource)
    })

  }


}
