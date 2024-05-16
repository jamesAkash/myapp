import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss',
})
export class SquareComponent {
  randomNumber = Math.random();

  constructor() {
    setInterval(() => (this.randomNumber = Math.random()), 500);
  }
}
