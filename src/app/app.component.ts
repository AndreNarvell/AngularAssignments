import { Component } from '@angular/core';
import { Animal } from './models/animals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_Assignments';

  animalPic: string = 'https://tinyurl.com/2p9dkff9';

  changeTwo: string = 'changeTwo';

  isChange: boolean = true;

  change() {
    this.isChange = !this.isChange;
  }

  zoo: Animal[] = [
    { name: 'zebra ', age: 2, type: ' nästan häst ', isFed: false },
    { name: 'krokodil ', age: 500, type: ' nästas dinosaur ', isFed: false },
    { name: 'fågel ', age: 64, type: ' nästan flygplan ', isFed: false },
  ];

  animalsFed: number = 0;

  makeAnimalFed(animal: Animal) {
    animal.isFed = true;
    this.animalsFed++;
    console.log(this.animalsFed);
  }

  animationSpeed: number = 1;
}
