import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number[] = [];
  even: number[] = [];

  onStartTimerStarted(passedNumber: number) {
    if (passedNumber % 2 === 0) {
      this.even.push(passedNumber);
    } else {
      this.odd.push(passedNumber);
    }
  }
}
