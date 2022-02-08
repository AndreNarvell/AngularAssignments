import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = '';
  name2: string = '';
  name3: string = '';

  keyup(name: any) {
    this.name = name.target.value;
  }

  keyupTwo(name2: KeyboardEvent) {
    this.name2 = (name2.target as HTMLInputElement).value;
  }

  keyupThree(name3: any) {
    this.name3 = (name3.target as HTMLInputElement).value;
  }
}
