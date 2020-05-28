import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/service.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private server:ServiceService) { }

  ngOnInit(): void {
    this.server.getClientes().subscribe((res)=>{
      console.log(res)
    })
  }

}
