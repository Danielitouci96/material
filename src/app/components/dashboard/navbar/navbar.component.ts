import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Menu[] = [];
  menu2: Menu[] = [
    {
      "name": "Reports",
      "redirect": "/dashboard/reports"
    }
  ];

  constructor(private _menuService: MenuService ) { }

  ngOnInit(): void {
  this.loadMenu();
  }

  loadMenu(){
    this._menuService.getMenu().subscribe({
      next:data=>{
        this.menu = data
      }
    })
  }

}
