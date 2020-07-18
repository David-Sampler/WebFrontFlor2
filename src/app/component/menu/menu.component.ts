import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  permissao = [
    {
      pai:0,
      icon:'home',
      link:'/home'
    },
    {
      pai:0,
      icon:'account_box',
      link:'/usuarios'
    },
    {
      pai:0,
      icon:'supervised_user_circle',
      link:'/clientes'
    },
    {
      pai:0,
      icon:'shopping_basket',
      link:'/servicos'
    },
    {
      pai:0,
      icon:'add_shopping_cart',
      link:'/vendas'
    }

  ]

  constructor(private server:ServiceService,private router:Router) { }

 

  ngOnInit(): void {
   /* this.server.getClientes().subscribe((res)=>{
      console.log(res)
    })*/

   
  }

  sair(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
