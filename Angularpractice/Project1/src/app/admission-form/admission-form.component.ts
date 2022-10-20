import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HostListener } from '@angular/core';
import { Register } from '../register';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  // firstname: string="";
  // middlename: string="";
  // lastname: string="";
  // gender: boolean=false;
  // fathername: string="";
  // mothername: string="";
  // grade: string="jbb";
  // gradee: string="";
  // board: string="";
  // boardd: string="";
  // domain:string="";
  // terms:boolean=false;
  // phone: string="";
  // mail: string="";
  topics=['ComputerScience Engineering',
  'Mechanical Engineering',
 'AI ML Engineering',
  'Electronics Engineering',
  'Civil Engineering'];
  registerModel = new Register('Kripa','','Bhat','female','KV Bhat',
  'Roopa Bhat',7417428078,'kribhat@gmail.com','9.6cgpa','96%','ComputerScience Engineering',true);

  constructor() { }
  @HostListener('submit') submit(){
    alert('Form submitted');
  }

  ngOnInit(): void {
  }
admissionform(formValue:NgForm){
  console.log(formValue);
}
}
