import { Component } from '@angular/core';
import { DemoAngularMaterialModule } from '../DemoAngularMaterialModule';
import { A11yModule } from '@angular/cdk/a11y';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../services/auth/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserStorageService } from '../services/storage/user-storage';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    A11yModule,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  loginform!: FormGroup;

  hiddenPassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: Auth,
    private snackbar: MatSnackBar,
    private router: Router,
    private userStorage: UserStorageService,
  ) {}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  togglePasswordVisibility() {
    this.hiddenPassword = !this.hiddenPassword;
  }

  onSubmit() {
    const username = this.loginform.get('email')!.value;
    const password = this.loginform.get('password')!.value;

    this.authService.login(username, password).subscribe(
      (data: any) => {
        const user = data.user;
        const role = user.role;

        if (role === 'ADMIN') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/customer/dashboard']);
        }
      },
      (error) => {
        console.error('LOGIN ERROR:', error);
        this.snackbar.open('Login failed', 'Close', { duration: 5000 });
      },
    );
  }
}
