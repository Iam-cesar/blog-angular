import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { AuthService } from 'src/app/shared/services/authService/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent {
  constructor(private router: Router, private authService: AuthService) {}

  public signUpData = new FormGroup({
    firstName: new FormControl('', Validators.required()),
    lastName: new FormControl('', Validators.required()),
    email: new FormControl('', Validators.required()),
    password: new FormControl('', Validators.required()),
  });

  protected signUp() {
    this.authService.signUp(this.signUpData.value)?.subscribe(response => {
      console.log(
        '🚀 ~ file: signup.component.ts:26 ~ SignUpComponent ~ signUp ~ response:',
        response
      );
      this.authService.setSession(response);
      this.router.navigateByUrl('/browse');
    });
  }
}
