import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  sidebarVisible: boolean = false;
  constructor(private router: Router) { }

  chamados(){
    this.router.navigate(['/chamados']);
  }
  projetos(){
    this.router.navigate(['/projetos']);
  }
  usuarios(){
    this.router.navigate(['/usuarios']);
  }
  clientes(){
    this.router.navigate(['/clientes']);
  }
  calendario(){
    this.router.navigate(['/calendario']);
  }
  tabela(){
    this.router.navigate(['/tabela']);
  }
  sair(){
    this.router.navigate(['/login']);
  }
}
