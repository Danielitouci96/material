import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { OpenMapComponent } from './open-map/open-map.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children :[
  {path: '', component: InicioComponent},
  {path: 'users', component: UsersComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'open-map', component: OpenMapComponent},

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
