import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommunicationService } from '../communication.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnChanges {
  @Input() value = ' ';
  @Input() noOfMovies:number= 0;
  
  @Output() comingsoonEvent= new EventEmitter<string>();
  public child1component ="";
  
  constructor(public communication:CommunicationService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['noOfMovies'] && changes['noOfMovies'].currentValue){

      this.noOfMovies = changes['noOfMovies'].currentValue - 2;
    }
    else{
      this.noOfMovies = 0;
    }
  }
  ngOnInit(): void {
    this.communication.on<string>().subscribe(data=>{
      this.child1component = data;
    })
  }
 addcomingsoon(value:string){
 this.comingsoonEvent.emit(value);
  }
  okay(){
    this.communication.ok('okay! Dont worry, Have fun :)');
   }
}
