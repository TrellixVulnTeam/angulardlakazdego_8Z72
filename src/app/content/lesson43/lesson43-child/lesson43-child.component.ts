import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lesson43-child',
  templateUrl: './lesson43-child.component.html',
  styleUrls: ['./lesson43-child.component.css']
})
export class Lesson43ChildComponent implements OnInit {

  title = 'Lesson43 child';

  constructor() { }

  @Output()
  newJob = new EventEmitter<string>();

  add(job: HTMLInputElement) {
        this.newJob.emit(job.value);
  }

  ngOnInit(): void {
  }

}
