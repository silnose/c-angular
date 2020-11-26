import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    email: [
      null,
      Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.email,
      ]),
    ],
    password: [
      null,
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      const value = this.registerForm.value;
      this.authService.createUser(value.email, value.password).then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  get passwordField() {
    return this.registerForm.controls['password'];
  }
  get emailField() {
    return this.registerForm.controls['email'];
  }
}
