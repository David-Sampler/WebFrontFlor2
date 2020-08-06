import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resumovenda',
  templateUrl: './resumovenda.component.html',
  styleUrls: ['./resumovenda.component.css']
})
export class ResumovendaComponent implements OnInit {

  valor
  recebindo
  calc
  res
  constructor() { }

  ngOnInit(): void {
    this.valor = window.localStorage.getItem("total")
  }

  resultado(event) {
    this.recebindo = (event.target.value)
    console.log(this.recebindo)
    return this.recebindo
  }

  getValor() {
    if (eval(this.recebindo) < eval(this.valor)) {
      alert("Valor Negativo")
    } else {
      this.res = (this.recebindo - this.valor)
      console.log(this.res)
      return eval(this.res)
    }

  }


}
