import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ParamMap } from '@angular/router';
@Component({
  selector: 'app-student-detail',
  template: `
    <h4> selected id ={{studentId}} <h4>
    <button (click) = "showResult()">Result</button>&nbsp;
    <button ><a (click)="showContact()">Contact</a></button><br>
    <router-outlet></router-outlet>
    <p><button><a (click)="goPrev()">Prev</a></button>&nbsp;
    <button><a (click)="goNext()">Next</a></button><br></p>
    <p><button (click) ="gotostud()"> <- BACK</button></p>
  `,
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {
  public studentId : any;
  constructor(private route : ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.studentId=id
    }
    );

}
goPrev(): void {
  let previous = parseInt(this.studentId)-1;
  this.router.navigate(['/student',previous])
}
goNext(): void {
  let next = parseInt(this.studentId)+1;
  this.router.navigate(['/student',next])
}
gotostud(): void {
  let selectedId = this.studentId?this.studentId:null;
//   this.router.navigate(['/student',{id:selectedId}])
this.router.navigate(['../',{id:selectedId}], {relativeTo:this.route})
// }
}
showResult(){
  this.router.navigate(['result'],{relativeTo:this.route})
}
showContact(){
  this.router.navigate(['contact'],{relativeTo:this.route})
}
}