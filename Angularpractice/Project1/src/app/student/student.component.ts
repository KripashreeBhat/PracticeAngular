import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-student',
  template: `<h3>
                  Founders Info
                  </h3>
                  <ul>
                  <li (click) ="onSelect(student)" [class.selected] = "isSelected(student)"*ngFor="let student of students">
                  <span>{{student.id}}&nbsp;&nbsp;</span>{{student.name}}
                  </li>
                  </ul>
                  {{collegename}}`,
  
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public collegename:any;
  public selectedId :any;
  students=[
    {'id': '1', 'name': 'John', 'email': 'john@example.com'},
    {'id': '2', 'name': 'Jane', 'email': 'jane@example.com'},
    {'id': '3', 'name': 'Doe', 'email': 'doe@example.com'},
    {'id': '4', 'name': 'Kate', 'email': 'kate@example.com'},
    {'id': '5', 'name': 'Ronal', 'email': 'ronal@example.com'}
  ]

  constructor(private router:Router , private route:ActivatedRoute) { 
    
  }

  @HostListener('click')myclick(){
    alert('clicked');
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.selectedId=id;
    })
      this.route.queryParams.subscribe((params)=>{
        this.collegename =params['collegename'];
      })
    }
 onSelect(student :any) {
  // this.router.navigate(['/student',student.id]);
  this.router.navigate([student.id], {relativeTo :this.route})
}
isSelected(student : any){
  return student.id === this.selectedId;
}
}