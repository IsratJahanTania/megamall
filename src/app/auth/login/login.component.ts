import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
      userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    });
  }

  handleLoginFormSubmit(): void {
    console.log(this.form.value);
  }

}
