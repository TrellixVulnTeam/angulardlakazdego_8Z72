import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  title = 'Communication between components';
  animalsParent: any[] = ['Dog','Cat','Bird']


  constructor() { }

  ngOnInit(): void {

    this.animalsParent.length;
  }

}
