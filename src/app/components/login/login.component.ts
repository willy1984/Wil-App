import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formLogin!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.builderForm();
  } 

  builderForm() {
    this.formLogin = this.fb.group({
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  ingresar() {
    if (this.formLogin.valid) {
      alert('ingresar')
    }
  }

}
