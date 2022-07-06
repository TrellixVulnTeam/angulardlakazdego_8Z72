import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-child3',
  templateUrl: './com-child3.component.html',
  styleUrls: ['./com-child3.component.css']
})
export class ComChild3Component implements OnInit {

  title = 'Communication Child 3';

  constructor() { }

  ngOnInit(): void {
  }

}
