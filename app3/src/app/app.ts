import { Component, signal } from '@angular/core';

@Component({
  selector: 'app3-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app3');
}
