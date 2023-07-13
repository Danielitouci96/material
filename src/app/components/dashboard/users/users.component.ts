import { UsersService } from './../../../services/users/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/users';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  users: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'lastName', 'sex', 'phone', 'country', 'actions'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;

  constructor(private _userService: UsersService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  deleteUserById(i: number){
    this._userService.deleteUsersById(i);
    this.loadUsers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

     this._snackBar.open('Deleted user', '',{
       verticalPosition: 'top',
       horizontalPosition: 'right',
       duration: 2000
     })
  }

  loadUsers(){
    const users$: Observable<User[]> = of(this._userService.getUsers());
    users$.subscribe(
      users=>{
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users)
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
