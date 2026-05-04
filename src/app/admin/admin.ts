import { Component } from '@angular/core';
import { AdminRoutes } from './admin.routes';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterialModule } from '../DemoAngularMaterialModule';
import { Observable } from 'rxjs';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoAngularMaterialModule,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss'],
})
export class Admin {}
