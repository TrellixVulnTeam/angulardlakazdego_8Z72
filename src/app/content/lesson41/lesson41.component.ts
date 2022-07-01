import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson41',
  templateUrl: './lesson41.component.html',
  styleUrls: ['./lesson41.component.css']
})
export class Lesson41Component implements OnInit {


  title = 'Lesson #41 lifecycle hooks';
  constructor() { }

  ngOnInit(): void {
  }

}
