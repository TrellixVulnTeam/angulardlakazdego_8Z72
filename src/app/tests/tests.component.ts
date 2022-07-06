import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  title = 'Test Component for Angular skills';

  constructor() { }

  ngOnInit(): void {
  }

}
