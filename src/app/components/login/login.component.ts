import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router) {

    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })

   }

  ngOnInit(): void {
  }

  submit(){
    const user = this.form.value.user
    const pass = this.form.value.password

    if (user == 'admin' && pass === 'dani'){
      this.fakeRedirect();

    }else{
      this.form.reset();
      this.errors('Invalid Credentials');
    }

  }

  fakeRedirect(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['dashboard']);
    },1500)
  }

  errors(msg: string){
    this._snackBar.open(msg, '',{
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 2000
    })
  }

}
