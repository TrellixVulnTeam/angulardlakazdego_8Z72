import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newangular',
  templateUrl: './newangular.component.html',
  styleUrls: ['./newangular.component.css']
})
export class NewangularComponent implements OnInit {


  title = "New Angular Course";
  constructor() { }

  ngOnInit(): void {
  }

}
