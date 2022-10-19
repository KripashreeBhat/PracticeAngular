import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain',
  template: `
    <h3> Domain list </h3>
    <ul>
    <li *ngFor="let domain of domains">
    <span>{{domain.name}}</span>
    </li>
    </ul>
  `,
  styles: [
  ]
})
export class DomainComponent implements OnInit {
  domains =[
    {'name':'ComputerScience'},
    {'name':'Mechanicals'},
    {'name':'AI ML'},
    {'name':'Electronics'},
    {'name':'Civil'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
