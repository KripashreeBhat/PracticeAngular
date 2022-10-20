import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2>codeevalution</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>hidden</h2>
    </ng-template>

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">picked red</div>
      <div *ngSwitchCase="'yellow'">picked yellow</div>
      <div *ngSwitchCase="'green'">picked green</div>
      <div *ngSwitchDefault>pick again</div>
    </div>

    <div *ngFor="let color of colors; index as i; odd as o">
      <h2>{{ i }} {{ color }} {{ o }}</h2>
    </div>
    <h2>{{ 'wassup!!' + parentData }}</h2>
    <button (click)="fireEvent()">send event</button>
    <h2>
      {{ pipe }}
      <h2>{{ office | lowercase }}</h2>
      <h2>{{ pipe | uppercase }}</h2>
      <h2>{{ pipe | titlecase }}</h2>
      <h2>
        {{ office | slice: 3:6 }}
        <h4>{{ person | json }}</h4>
      </h2>
    </h2>
    <h2>{{4.567 |number: '1.2-4'}}</h2>
    <h2>{{4.567 |number: '4.1-2'}}</h2>
    
    <h2>{{0.50 | percent}}</h2>
    
    <h2>{{0.50 |currency}}</h2>
    <h2>{{0.50 |currency:'USD':'code'}}</h2>
    <h2>{{0.30 |currency:'INR'}}</h2>
    <h2>{{0.30 |currency: 'INR' : 'code'}}</h2>
    
    <h2>{{date}}</h2>
    <h2>{{date | date : 'short'}}</h2>
    <h2>{{date | date :'medium'}}</h2>
    <h2>{{date | date :'long'}}</h2>
    <h2>{{date | date :'shortDate'}}</h2>
    <h2>{{date | date :'mediumDate'}}</h2>
    <h2>{{date | date :'longDate'}}</h2>
    <h2>{{date | date :'shortTime'}}</h2>
    <h2>{{date | date :'mediumTime'}}</h2>
    <h2>{{date | date :'longTime'}}</h2>
    `,
  styleUrls: [],
})
export class TestComponent implements OnInit {
  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter();
  public colors = ['red', 'black', 'purple', 'pink'];
  displayName = false;
  public color = 'green';
  public pipe = 'Angular training';
  public office = 'Robosoft';
  public person = {
    firstName: 'John',
    lastName: 'Smith',
  };
  public date = new Date();
  constructor() {}

  ngOnInit(): void {}
  fireEvent(): void {
    this.childEvent.emit('coming from childEvent');
  }
}
