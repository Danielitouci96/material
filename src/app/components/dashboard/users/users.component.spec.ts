import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from 'src/app/services/users/users.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/users';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

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
  //let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(waitForAsync(() => {

    //userHttpSpy = jasmine.createSpyObj<UsersService>('UsersService', ['getUsers'])

    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        //{provide: [UsersService], useValue: userHttpSpy }
        { provide: [UsersService], useClass: UserHttpTestingService },
        MatSnackBar,
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


});
