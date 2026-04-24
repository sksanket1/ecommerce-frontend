import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, DemoAngularMaterialModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('EcommerceWeb');
}
