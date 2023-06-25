import { AuthService } from '../../../shared/services/authService/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent {
  constructor(private authService: AuthService, private router: Router) {}

  protected signInData = new FormGroup({
    email: new FormControl('', Validators.required()),
    password: new FormControl('', Validators.required()),
  });

  protected signIn() {
    this.authService
      .signIn(this.signInData.value)
      ?.subscribe((response: { accessToken: string }) => {
        this.authService.setSession(response);
        this.router.navigateByUrl('browse');
      });
  }
}
