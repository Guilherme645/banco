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

  sair(){
    this.router.navigate(['/login']);
  }
}
