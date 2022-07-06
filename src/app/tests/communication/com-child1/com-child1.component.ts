import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-child1',
  templateUrl: './com-child1.component.html',
  styleUrls: ['./com-child1.component.css']
})
export class ComChild1Component implements OnInit {

  title = 'Communication Child 1';

  constructor() { }

  ngOnInit(): void {
  }

}
