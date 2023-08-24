import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
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
      "name": "Map",
      "redirect": "/dashboard/open-map"
    }
  ];
  user: string | undefined;
  token: string = '';

  constructor(private _menuService: MenuService,
              private keycloakService: KeycloakService ) {
               }

  ngOnInit(): void {
  this.loadMenu();
  this.initializeUserOptions();
  this.getToken();
  }

  loadMenu(){
    this._menuService.getMenu().subscribe({
      next:data=>{
        this.menu = data
      }
    })
  }

  private initializeUserOptions(): void{
    this.user = this.keycloakService.getUsername();

  }

  private getToken(): void{
    this.keycloakService.getToken()
      .then((value: string) =>{
        this.token = value;
      }).catch((err: any) => {
        console.log('error en token:', err);
      })
  }


  logout(): void{
      this.keycloakService.logout('http://localhost:4200');
  }

}
