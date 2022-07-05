import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson39',
  templateUrl: './lesson39.component.html',
  styleUrls: ['./lesson39.component.css']
})
export class Lesson39Component implements OnInit {

  title = '#39 Local reference #referenceName';

  localInputToSTring = '';

  add(input: HTMLInputElement) {
    this.localInputToSTring = input.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
