import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  message:string="";

  newReleases = '';
  currentFav = "";
  title = 'sharing-data';
  soon = '';
  watched = 0;

  ngAfterViewInit(): void {
    this.message = this.child.childData
    this.cd.detectChanges();
    console.log(this.child.childData);
  }
 @ViewChild(Child1Component)  child !:Child1Component;

  constructor(private cd:ChangeDetectorRef){}

  addRelease(newMovie: string){
  // this.newReleases.push(newMovie);
  this.newReleases = newMovie;
    
  }
  addcomingsoon(comingsoon: string){
    this.soon = comingsoon;
}
changefav(){
  this.currentFav ="black";
}
}
