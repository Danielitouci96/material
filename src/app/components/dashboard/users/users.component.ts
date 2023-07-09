import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';


const ELEMENT_DATA: User[] = [
  { id: 1, name: 'Hydrogen', lastName: "Rodriges", sex: 'Female' ,phone: 8364046, country: "Cuba"},
  { id: 2, name: 'Helium', lastName: "Snow", sex: 'Female', phone: 8364046, country: "Cuba" },
  { id: 3, name: 'Lithium', lastName: "PicaPica", sex: 'Female', phone: 8364046, country: "Cuba" },
  { id: 4, name: 'Beryllium', lastName: "Troya", sex: 'Female', phone: 8364046, country: "Cuba" },
  { id: 5, name: 'Boron', lastName: "Alves", sex: 'Female', phone: 8364046, country: "Cuba"},
  { id: 6, name: 'Carbon', lastName: "Perez", sex: 'Female', phone: 8364046, country: "Cuba"},
  { id: 7, name: 'Nitrogen', lastName: "Arnaldo", sex: 'Female', phone: 8364046, country: "Cuba"},
  { id: 8, name: 'Oxygen', lastName: "Federico", sex: 'Female', phone: 8364046, country: "Cuba"},
  { id: 9, name: 'Fluorine', lastName: "Federico", sex: 'Female', phone: 8364046, country: "Cuba"},
  { id: 10, name: 'Neon', lastName: "Federico", sex: 'Female', phone: 8364046, country: "Cuba" },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'lastName', 'sex', 'phone', 'country', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
