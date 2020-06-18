import { Router } from '@angular/router';
import { Usuario } from './../../model/modelUsuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.css']
})


export class CreateUsuariosComponent implements OnInit {
  hide = true;
  formUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder, private server: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.configForm()
  }

  configForm() {
    this.formUsuario = this.formBuilder.group({
      nome: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["",Validators.required]

    })
  }

  listUser() {
    this.server.getAllUser().subscribe((res) => {
      console.log(res)
    })
  }

  createUser() {
    this.server.postUsuario(this.formUsuario.value).subscribe((res) => {
      console.log(res)
    })
    this.formUsuario.reset()
  }

  btnCancel() {
    this.router.navigate(['/usuarios'])
  }

}
