import { Component } from '@angular/core';
import { DefaultLoginLayouComponent } from '../../component/default-login-layou/default-login-layou.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../component/primary-input/primary-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayouComponent,
    //Precisa colocar o ReactiveFormsModule para criar o formulário
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    })
  }
  
}
