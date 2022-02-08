import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/models/animals';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.css'],
})
export class PrintAnimalComponent implements OnInit {
  @Input() animal: Animal = new Animal('Snok ', 4, ' orm ', true);

  @Output() fed = new EventEmitter<Animal>();

  feedAnimal() {
    this.fed.emit(this.animal);
  }

  constructor() {}

  ngOnInit(): void {}
}
