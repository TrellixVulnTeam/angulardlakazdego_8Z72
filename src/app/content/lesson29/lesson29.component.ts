import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson29',
  templateUrl: './lesson29.component.html',
  styleUrls: ['./lesson29.component.css']
})
export class Lesson29Component implements OnInit {

  title = 'Lesson #29 Data Binding';
  inputText = 'inputText';
  inputTextTwoWay = 'inputTextTwoWay';
  button: boolean = true;

  showClick  = '';

  click(event: MouseEvent){
    this.showClick = 'Activated'
    this.button = false;
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
