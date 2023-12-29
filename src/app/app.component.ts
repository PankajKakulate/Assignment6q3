import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  
  styleUrl: './app.component.css',
  template: `
    <h1 [class]="'customCssClass'">Marvellous Infosystems</h1>
    <input [class]="'customCssClass'">
    <h1 style="color: blue;">Pankaj Keda Kakulate's Inline CSS in ts file </h1>
  `
})
export class AppComponent {
  title = 'Assignment6q3';
}
