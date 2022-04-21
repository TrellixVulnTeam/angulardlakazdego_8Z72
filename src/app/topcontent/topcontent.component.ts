import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topcontent',
  templateUrl: './topcontent.component.html',
  styleUrls: ['./topcontent.component.css']
})
export class TopcontentComponent implements OnInit {

  title = 'Content Top Component'

  constructor() { }

  ngOnInit(): void {
  }

}
