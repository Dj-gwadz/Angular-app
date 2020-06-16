import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  @Input() application: Application;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);

  }

  @Output() isUp = new EventEmitter<boolean>();
  addUp(add:boolean){
    this.isUp.emit(add);
  }
  @Output() isDown = new EventEmitter<boolean>();
  addDown(ad:boolean){
    this.isDown.emit(ad);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
