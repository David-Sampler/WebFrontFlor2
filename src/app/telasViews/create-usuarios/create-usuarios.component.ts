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

  constructor(private formBuilder: FormBuilder, private server: ServiceService) {
  }

  ngOnInit(): void {
    this.configForm()
    this.listUser()
  }

  configForm() {

    this.formUsuario = this.formBuilder.group({
      nome: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: [""]

    })
  }

  listUser(){
    this.server.getAllUser().subscribe((res)=>{
      console.log(res)
    })
  }

  createUser() {
    this.server.postUsuario(this.formUsuario.value).subscribe((res) => {
      console.log(res)
    })
  }

}
