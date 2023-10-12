import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "../../core/auth/auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  public form!: FormGroup;
  public Email = 'admin@gmail.com';
  public Password = 'admin';

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.Email, [Validators.required, Validators.email]),
      password: new FormControl(this.Password, [Validators.required])
    });
  }

  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
    }
  }
}
