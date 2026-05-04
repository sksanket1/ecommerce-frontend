import { Component } from '@angular/core';
import { DemoAngularMaterialModule } from '../../../DemoAngularMaterialModule';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Admin } from '../../service/admin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-category',
  imports: [DemoAngularMaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './post-category.html',
  styleUrl: './post-category.scss',
})
export class PostCategory {
  categoryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private adminService: Admin,
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      this.adminService.addCategory(this.categoryForm.value).subscribe((response) => {
        if (response.id != null) {
          this.snackbar.open('Category added successfully', 'Close', {
            duration: 5000,
          });
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.snackbar.open('Failed to add category', 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar',
          });
        }
      });
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
