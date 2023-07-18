import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from 'src/app/services/users/users.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/users';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

interface MockEvent extends Event {
  target: HTMLInputElement;
}

class UserHttpTestingService {
  getUsers(): User[] {
    return [
      { id: 1, name: 'Hydrogen', lastName: "Rodriges", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 2, name: 'Helium', lastName: "Snow", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 3, name: 'Lithium', lastName: "PicaPica", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 4, name: 'Beryllium', lastName: "Troya", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 5, name: 'Boron', lastName: "Alves", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 6, name: 'Carbon', lastName: "Perez", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 7, name: 'Nitrogen', lastName: "Arnaldo", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 8, name: 'Oxygen', lastName: "Federico", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 9, name: 'Fluorine', lastName: "Federico", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 10, name: 'Neon', lastName: "Federico", sex: 'Female', phone: 8364046, country: "Cuba" },
    ]

  }
}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userHttpService: UsersService;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(waitForAsync(() => {

    //userHttpSpy = jasmine.createSpyObj<UsersService>('UsersService', ['getUsers'])
    snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['open'])

    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        //{provide: [UsersService], useValue: userHttpSpy }
        { provide: [UsersService], useClass: UserHttpTestingService },
        {provide: MatSnackBar, useValue: snackBarSpy },
        Overlay,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userHttpService = TestBed.inject(UsersService)

  }));

  it('should get all users', () => {
    //userHttpSpy.getUsers.and.returnValues([
    spyOn(userHttpService, 'getUsers').and.returnValues([
      { id: 1, name: 'Hydrogen', lastName: "Rodriges", sex: 'Female', phone: 8364046, country: "Cuba" },
      { id: 2, name: 'Helium', lastName: "Snow", sex: 'Female', phone: 8364046, country: "Cuba" },
    ]);

    component.loadUsers();
    expect(component.users.length).toBe(2);
  });

  it('should delete a user and show snackbar', () => {
    const spy = spyOn(userHttpService, 'deleteUsersById').and.callThrough()
    component.deleteUserById(1);

    expect(spy).toHaveBeenCalledWith(1);
    expect(component.dataSource.paginator).toBe(component.paginator);
    expect(component.dataSource.sort).toBe(component.sort);
    expect(snackBarSpy.open).toHaveBeenCalledWith('Deleted user', '',{
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 2000
    })
    expect(component.users.length).toBe(29)
  });

  it('should return user equals to input', () => {
    const filterValue = 'Hydro';
    const event: MockEvent = { target: { value: filterValue } } as MockEvent;

    component.applyFilter(event);
    expect(component.dataSource.filter).toEqual(filterValue.trim().toLowerCase());

  })

});
