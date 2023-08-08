import { UsersService } from './../../../services/users/users.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, map, of, startWith } from 'rxjs';
import { User } from 'src/app/interfaces/users';

/* //para las chips

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent, } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

// */

import { MatDialog } from '@angular/material/dialog';
import { ColumnFilterComponent } from './column-filter/column-filter.component';

export const CONDITIONS_LIST = [
  //{ value: "nono", label: "Nono" },
  { value: "is-empty", label: "Vacio" },
  { value: "is-not-empty", label: "No vacio" },
  { value: "is-equal", label: "Igual" },
  { value: "is-not-equal", label: "Diferente" }
];

export const CONDITIONS_FUNCTIONS = { // search method base on conditions list value
  "is-empty": function (value: string, filterdValue: any) {
    return value === "";
  },
  "is-not-empty": function (value: string, filterdValue: any) {
    return value !== "";
  },
  "is-equal": function (value: any, filterdValue: any) {
    return value == filterdValue;
  },
  "is-not-equal": function (value: any, filterdValue: any) {
    return value != filterdValue;
  }
};


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  /* //para el chips de angular

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['id', 'name', 'lastName', 'sex', 'phone', 'country'];
  //allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  // */

  users: User[] = [];
  //valor:any= 'name';

  displayedColumns: string[] = ['id', 'name', 'lastName', 'sex', 'phone', 'country', 'actions'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  conditionsList = CONDITIONS_LIST;
  searchValue: any = {};
  searchCondition: any = {};
  private _filterMethods = CONDITIONS_FUNCTIONS;


  constructor(private _userService: UsersService,
    private _snackBar: MatSnackBar,public dialog: MatDialog) {

      /* //para las chips

      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
      );

      // */


  }

  ngOnInit(): void {
    this.loadUsers()
    this.dataSource.filterPredicate = (data: any, filter: any) => {
      let result = true;
      let keys = Object.keys(filter.conditions); // keys of the search conditions

      for (const key of keys) {
        let searchCondition = filter.conditions[key]; // get search filter method

        if (searchCondition && searchCondition !== 'none') {
          let value = data[key].toString().toLowerCase(); // convert value to lowercase
          let searchValue = filter.values[key].toString().toLowerCase(); // convert search value to lowercase
          let method = filter.methods[searchCondition]; // get search filter method

          if (method) {
            result = method(value, searchValue); // invoke search filter
          }

          if (!result) {
            break;
          }
        }
      }

      return result;
    };
  }

  deleteUserById(i: number) {
    this._userService.deleteUsersById(i);
    this.loadUsers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._snackBar.open('Deleted user', '', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 2000
    })
  }

  loadUsers() {
    const users$: Observable<User[]> = of(this._userService.getUsers());
    users$.subscribe(
      users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users)
      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //filtrar por todos los atributos de la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase() ;
  }

  applyFilterMultiply() {
    let searchFilter: any = {
      values: this.searchValue,
      conditions: this.searchCondition,
      methods: this._filterMethods
    }
    console.log(searchFilter);

    this.dataSource.filter = searchFilter;
  }

  clearColumn(columnKey: string): void {
    this.searchValue[columnKey] = null;
    this.searchCondition[columnKey] = 'none';
    this.applyFilterMultiply();
  }


  /* //para las chips

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (this.allFruits.includes(value)) {
      this.fruits.push(value);
      this.openDialog(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    this.openDialog(event.option.viewValue);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  // */


  /* openDialog(field: string){
    const openDialogRef = this.dialog.open(ColumnFilterComponent,{
      width: '600px',
      data: {name: field, data: this.copyDataSource },
    })

    openDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } */

}
