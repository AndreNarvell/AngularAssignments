import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  animalList: Animal[] = [
    { name: 'apa ', age: 5, type: ' monkey ', isFed: true },
    { name: 'katt ', age: 50, type: ' mjau ', isFed: true },
    { name: 'hund ', age: 34, type: ' vof ', isFed: false },
    { name: 'hest ', age: 4, type: ' gnegg ', isFed: false },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.animalList);
  }
}
