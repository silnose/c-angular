import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailField: FormControl;
  constructor() {
    this.emailField = new FormControl('', [
      Validators.maxLength(100),
      Validators.email,
      Validators.required,
    ]);
    // this.emailField.valueChanges.subscribe((value) => console.log(value));
  }

  ngOnInit(): void {}

  sendEmail() {
    if (this.emailField.valid) {
      const email = this.emailField.value;
      console.log(email);
    }
  }
}
