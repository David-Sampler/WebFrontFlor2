import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 

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
