import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Application } from '../application';
// import { Quote } from '@angular/compiler';
// import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Application(0,'', '', '', 0, 0, new Date());
  @Output () addQuote = new EventEmitter<Application>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote =  new Application(0,'', '', '', 0, 0, new Date());
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
