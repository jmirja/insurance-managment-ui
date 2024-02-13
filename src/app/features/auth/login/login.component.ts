import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { routes } from '@core/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<any>();
  userName = '';
  password = '';
  loginForm!: FormGroup;
  isSubmitted = false;
  hidePassword = true;
  isProcessing = false;
  public routers: typeof routes = routes;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(this.userName, [Validators.required]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }

  get controlsValues() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.loginForm.disable();
      this.isProcessing = true;
      this.sendLoginForm.emit(this.loginForm.value);
      this.authService.isLoggedIn.subscribe((val) => {
        if (val == true) {
          this.isProcessing = false;
          this.loginForm.enable();
          this.router.navigate([this.routers.DASHBOARD]);
        }
      });


    }
  }
}
