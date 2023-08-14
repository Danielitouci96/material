import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form!: FormGroup;
  valueForm:string[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required]],
      password1:['',[Validators.required]]
    })
  }

  submit(){
    this.valueForm =[this.form.value.email, this.form.value.password]

  }

}
