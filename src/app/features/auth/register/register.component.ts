import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() sendRegisterForm = new EventEmitter<void>();

  registerForm!: FormGroup;
  isSubmitted = false;
  @Input()
  isProcessing = false;

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get controlsValues() {
    return this.registerForm.controls;
  }

  onRegister() {
    this.isSubmitted = true;

    if (
      this.registerForm.value.fullname == '' &&
      this.registerForm.value.username == '' &&
      this.registerForm.value.email == '' &&
      this.registerForm.value.password == ''
    ) {
      return;
    }

    this.registerForm.disable();
    this.isProcessing = true;
    this.sendRegisterForm.emit(this.registerForm.value);
    this.authService.isRegisteredIn.subscribe((val) => {
      if (val == true) {
        this.isProcessing = false;
        this.registerForm.enable();
        this.registerForm.reset();
      }
    });

  }

}
