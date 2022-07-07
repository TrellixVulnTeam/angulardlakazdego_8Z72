import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-child2',
  templateUrl: './com-child2.component.html',
  styleUrls: ['./com-child2.component.css']
})
export class ComChild2Component implements OnInit {

  title = 'Communication Child 2';

  @Input()
  processesFromParrent: string[];

  constructor() {
    this.processesFromParrent = [];
  }

  ngOnInit(): void {
  }

}
