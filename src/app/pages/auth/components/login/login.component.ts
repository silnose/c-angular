import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { TokenService } from '../../../../core/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform = this.formBuilder.group({
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
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {}

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginform.valid) {
      const form = this.loginform.value;
      const email = form.email;
      const password = form.password;
      this.authService
        .login(email, password)
        .then(() => {
          this.router.navigate(['/admin']);
        })
        .catch((error) => {
          console.log(error);
          alert('Error Try Again!');
        });
    }
  }

  loginRest() {
    if (this.loginform.valid) {
      const form = this.loginform.value;
      const email = form.email;
      const password = form.password;
      console.log('etro');
      this.authService.loginRestApi(email, password).subscribe((data: any) => {
        console.log(data);
        this.tokenService.saveToken(data.token);
      });
    }
  }
  get passwordField() {
    return this.loginform.controls['password'];
  }
  get emailField() {
    return this.loginform.controls['email'];
  }
}
