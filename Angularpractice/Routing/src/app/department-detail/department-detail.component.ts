import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3> you have selected department with id = {{departmentId}}</h3>
    <a (click) = "goPrevious()">Previous </a>
    <a (click) = "goNext()">Next</a>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId : any;
  constructor(private route : ActivatedRoute , private router : Router) { }

  ngOnInit() : any {
    // let id = (this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params :ParamMap)=>{
      let id = params.get('id');
      this.departmentId = id;
    });
  }
  goPrevious() : any {
    let previousId= parseInt(this.departmentId )-1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() : any {
    let nextId= parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments', nextId]);

}
}