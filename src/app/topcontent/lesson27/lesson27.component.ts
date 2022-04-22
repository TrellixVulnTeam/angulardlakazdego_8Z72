import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson27',
  templateUrl: './lesson27.component.html',
  styleUrls: ['./lesson27.component.css']
})
export class Lesson27Component implements OnInit {

title = 'Display Data ngSwith #27 Component lesson27 & lesson28  ';
  isVisible = true;
  isHidden = false;

  hide(){
  this.isHidden = !this.isHidden
  }
    

  show(){
    this.isVisible = !this.isVisible;
  }
  


  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thuesday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
