import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() timesUps = new EventEmitter<number>();
  duration; // property for timer
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartTimer() {
    this.duration = setInterval(() => {
      this.timesUps.emit(this.lastNumber);
      this.lastNumber++;
    }, 1000);
  }

}
