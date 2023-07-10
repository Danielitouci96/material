import { UsersService } from './../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/users';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder,
              private userService: UsersService) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      sex: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  submit(){
    const user: User = {
      id: this.form.value.id,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      sex: this.form.value.sex,
      phone: this.form.value.phone,
      country: this.form.value.country
    }
    this.userService.createUser(user)

  }

  createUser(){

  }

}
