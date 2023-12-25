import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<any>();
  form!: FormGroup;
  UserName = '';
  Password = '';

  isProcessing = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl(this.UserName, [Validators.required]),
      password: new FormControl(this.Password, [Validators.required]),
    });
  }

  login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit(this.form.value);
    }
  }
}
