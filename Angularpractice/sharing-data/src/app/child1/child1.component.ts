import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() movie = "ZNMD";
  @Output() newReleaseEvent = new EventEmitter<string>();

  public child2component ="";

  childData:string="data from child through view";

  constructor(private  communication : CommunicationService ) { }
  
 send(){
  this.communication.emit('Dont tell parents, I went to movies with my friends');
 }

  ngOnInit(): void {
    this.communication.read.subscribe(data=>{
      this.child2component = data;
    })
  }
 
  addNewMovies(value:string){
  this.newReleaseEvent.emit(value);
}
}
