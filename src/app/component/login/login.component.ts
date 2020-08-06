import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup
  modelo = 'determinate'
  cena = true

  constructor(private formBuild: FormBuilder, private server: ServiceService, private router: Router) {

    this.form = this.formBuild.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })

  }

  ngOnInit(): void {
    this.modelo

  }

  getDados() {
    const dado = this.form.value
    console.log(dado)


    this.server.login(this.form.value).subscribe((res) => {
      console.log(res)

      if (res == null) {

        console.log("aqui")
        return this.server.openMessagem("Email ou senha invalido", "")


      } else {
        this.modelo
        console.log(res.token)
        window.localStorage.setItem('token', res.token)

        this.cena = false
        this.modelo = 'indeterminate'

        setTimeout(() => {
          this.modelo = 'indeterminate'
          return this.router.navigate(['/'])
        }, 4000)


      }



    })


  }



}
