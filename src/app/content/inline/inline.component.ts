import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template:`<h3>{{title }}</h3>`,
  styles: ['h3{color: green}']
})
export class InlineComponent implements OnInit {

  title = 'Inline Component #18';

  constructor() { }

  ngOnInit(): void {
  }

}
