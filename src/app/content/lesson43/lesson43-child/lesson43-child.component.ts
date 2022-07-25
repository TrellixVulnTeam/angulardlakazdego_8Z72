import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


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

  @ViewChild('newJob')
  inputFromHTML = ElementRef;

  add(job: HTMLInputElement) {
    if (job.value === '') {
      window.alert('Job can not be empty');
    } else {
      this.newJob.emit(job.value);
      job.value = '';
    }
   
  }

  ngOnInit(): void {
  }

}
