import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  // Transfer Items Between Lists
  AddedList = [
    {"id":1 ,"name":"Agility", "time":5},  
    {"id":2 ,"name":"Skill Practice", "time": 5},
    {"id":3 ,"name":"Injury Rehab", "time": 5},
    {"id":4 ,"name":"Lower Body", "time":5},
    {"id":5 ,"name":"Upper Body", "time":5},
    {"id":6 ,"name":"Education", "time":5},
    {"id":7 ,"name":"Reflexes", "time":5}, 
    {"id":8 ,"name":"Mental", "time":5}, 
    {"id":9 ,"name":"Cardio", "time":5}, 
    {"id":10 ,"name":"Survey", "time":5},  

    
  ];

  DropList = [
  ];

   
  isDisable =  false;
  countcal;
  hours ;
  minutes;
  stdTime(val:number){
    this.hours =  Math.trunc(val/60) + " hours and ";
    this.minutes = (val - Math.trunc(val/60)*60) + " minutes ";
  }

  count(){

    let sum = 0;
    for(let i =0 ; i<this.DropList.length ; i++ ){
      
      sum += this.DropList[i].time;
     
    }
    this.countcal = sum;
    this.stdTime(this.countcal)
  }
 
  sliderchange= true;
  dragStart(event : CdkDragStart<string[]>){
    this.sliderchange= false;
    event.source.element.nativeElement.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.setAttribute("disabled","true")
    console.log(event.source.element.nativeElement.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.attributes);
    //console.log(event.source.element.nativeElement.lastElementChild.lastElementChild.firstElementChild.firstChild);
    // console.log(event.source.element.nativeElement.lastElementChild.lastElementChild.firstElementChild.firstChild);
    // (event.source.element.nativeElement.lastElementChild.lastElementChild.firstElementChild.firstElementChild.setAttribute("disabled","true"));

    // //console.log(event.source.element.nativeElement.lastElementChild.lastElementChild.firstElementChild.firstChild.nodeValue);
   // . setAttribute("disabled","true") this.isDisable =  true;
    //console.log(event);
    
  }
 

  onDrop(event: CdkDragDrop<string[]>) {
  
    if (event.previousContainer === event.container) {
      

        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.isDisable =  false;
    this.sliderchange= true;

  }
  onchange(event){
   if(this.sliderchange==true){
    // console.log(event.value);
    // console.log(event.source._elementRef.nativeElement.id);
    var obj;
    for(let i =0 ; i<this.AddedList.length ; i++){
      // console.log(this.AddedList[event.source._elementRef.nativeElement.id].name);
      obj = this.AddedList.findIndex(x=>x.id==event.source._elementRef.nativeElement.id);
    //  console.log( this.AddedList[obj].name);
   // console.log(event.value);
    this.AddedList[obj].time=event.value;
    //console.log(this.AddedList[obj].time)
     }
    
    }

  }
  
}
