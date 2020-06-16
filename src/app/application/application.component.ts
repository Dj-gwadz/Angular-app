import { Component, OnInit } from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  application:Application[] = [
    new Application(1, 'That whose existence is necessary must necessarily be one essense','Gedi Dee', 'Quoted by  Avicenna, physician', 0, 0, new Date(2020,8,20)),
    new Application(2, 'The brave man is he who overcomers not only his enemies but his pleasures','Suzy Teddy', 'Quoted by Democrirus, ancient greek pre-socratic philosopher', 0, 0, new Date(1979,7,31)),
    new Application(3, 'Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations — it will transform your entire business.', 'Cynthia Odul', 'Quoted by  Daniel Bæk, Co-founder of NodesQuoted by Matt Haig Author of Mobile Marketing – “The Message Revolution', 0, 0, new Date(2019,6,20)),
    new Application(4, 'Failure is instructive. The person who really thinks learns quite as much from his failure as from his successes','Mac Jean','Quoted by John Dewey, psychologist', 0, 0, new Date(2012,6,7)),
    new Application(5, 'Employ your time in improving yourself by other mens writting, so that you can gain easily what others have labored hard for','Saul Jeep','Quoted by Socrates, philosopher', 0, 0, new Date(1996,5,3)),
  ];

  firstNum :number
  lastNum :number
  count :number

  deleteApplication(isComplete, index){
    if (isComplete){
      let toDelete = confirm( `Are you sure you want to delete ?`)
      if(toDelete){
        this.application.splice(index,1)
      }
    }
  }

  addNewApplication(application){
    let applicationLength = this.application.length;
    application.id = applicationLength+1;
    application.myDate =new Date(application.myDate);
    this.application.push(application)
    
  }

  addTotal(mine,index){
    if(mine){
      this.application[index].upvote +=1;
    }
  }

  adTotal(isDown,index){
    if(isDown){
      this.application[index].downvote +=1;
    }
  }

  loopVote(){
    this.firstNum = 0
    this.lastNum = 0

    for(this.count=0 ; this.count < this.application.length; this.count++) {
      this.lastNum = this.application[this.count].upvote;
      if(this.lastNum > this.firstNum){this.firstNum = this.lastNum}
    }
    return  this.firstNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
