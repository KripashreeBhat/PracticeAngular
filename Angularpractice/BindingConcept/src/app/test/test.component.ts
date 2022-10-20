import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>
                  welcome!!!!
                  </h1>
              <h2 class = text-success> To Angular</h2>
              <h2 [class]= successClass> LOVELIES </h2>
              <h2 [class.text-danger]= hasError> Aliens </h2>
              <h2 [ngClass]="messageClasses">codeeeee</h2>
              <h2 [style.color]="hasError? 'red' : 'green'"> style binding</h2>
              <h2 [style.color]="highlightColor"> style binding 2 </h2>
              <h2 [ngStyle]="titleStyle"> style binding 3</h2>
              <button (click)="onClick($event)">greet</button>
              {{greeting}}
              <input  #myInput type="text">
              <button (click) = "logMessage(myInput.value)"> LOG </button>
              <input [(ngModel)]="namee" type="text">
              {{namee}}`,
  styles: []
})
export class TestComponent implements OnInit {
public namee ="";
public name = "Rani";
public myId = "testId";
public isDisabled = "false";
public successClass= "text-success";
public hasError = true;
public isSpecial = true;
public messageClasses= {
  "text-success": !this.hasError,
  "text-danger":this.hasError,
  "text-special":this.isSpecial
  
}
public titleStyle = {
  color : "blue",
  fontStyle : "italic",

}
public highlightColor = 'orange';
public greeting="";
  constructor() { }

  ngOnInit(): void {
  }
greetUser(){
  return "how are you?" +" " +this.name;
}
onClick(event: any){
  console.log(event);
  this.greeting = event.type;
}
logMessage(value : string) {
  console.log(value);
}
public siteUrl = window.location.href;
}
