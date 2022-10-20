import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
// import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
// import { SpinSettingsModel, AnimationSettingsModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
  selector: 'app-faculty-admission',
  templateUrl: './faculty-admission.component.html',
  styleUrls: ['./faculty-admission.component.css']
})
export class FacultyAdmissionComponent implements OnInit {
addFacultyForm : FormGroup;
// public disp;
public showSpinner : boolean = false;
public count=0;
  constructor( private formbuilder:FormBuilder) { }
get form(){
  return this.addFacultyForm.get;
}
  ngOnInit(): void {
    // This was through formcontrol and formgroup
  //   this.addFacultyForm = new FormGroup({
  //     'fname': new FormControl(),
  //     'lname': new FormControl()
  // }),
  
  
  // This is through FormBuiler
  //case 1 : FormArray with FormComponent
  this.addFacultyForm = this.formbuilder.group({

  fname: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),this.noSpaceForName]),
  mname:new FormControl(''),
  lname: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]), 
  genders:[''],
  fathername:new FormControl('',[Validators.required]),
  mothername:new FormControl('',[Validators.required]),
  age: new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),this.ageRestriction]),
  mobileno:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]*$')]),
  email:new FormControl('',[Validators.required,Validators.email]),
  
  address: this.formbuilder.group({
    HouseNo: new FormControl(''),
    street:new FormControl(''),
    Landmark:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    Postalcode:new FormControl('')
    
  }),
  domain:['',Validators.required],
  terms:['',Validators.required],
  education:this.formbuilder.array([
    // new FormControl(null,Validators.required), 
    // this.formbuilder.control(''),
 
  ]),
});

  



// Set values
// // First way :Direct way
// this.addFacultyForm = this.formbuilder.group({
//   'fname': new FormControl('kripa'),
//   'lname': new FormControl('Bhat'),
//   'age': new FormControl(22),
//   'mobileno':new FormControl(7417428078),
//   'email':new FormControl('kri19bhat@gmail.com')
// })
// Second way : create instance
// const studentDetail={
//   'fname': 'Nagaveni',
//     'lname': 'Gopal naik',
//     'age': 22,
//     'mobileno':'9480672805',
//     'email':'nag08naik@gmail.com'
// }
// this.addFacultyForm.setValue(studentDetail);
// // third way: patchvalue
// this.addFacultyForm.patchValue(studentDetail);
// Track value changes
this.addFacultyForm.get('lname')?.valueChanges.subscribe(data=>{console.log(data);});
this.addFacultyForm.get('fname')?.statusChanges.subscribe(data=>{console.log('status');console.log(data);});
}
addFaculty(){
  console.log(this.addFacultyForm.value);
  // console.log(this.addFacultyForm.get('email')?.value);
  // console.log(this.addFacultyForm.valueChanges.subscribe(data =>console.log(data)));
}
loadData(){
  this.showSpinner =true;
  setTimeout(()=>this.showSpinner=false,2000)
  
}

// resetForm(){
//   this.addFacultyForm.reset();
// }
addeducation(){
  (<FormArray>this.addFacultyForm.get('education')).push((new FormControl(null,Validators.required)))
  // this.count= true;
  this.count++;
}
// Custom validation
noSpaceForName(control : FormControl){
if(control.value != null && control.value.indexOf(' ') != -1){
  return  {noSpaceForName: true}
}
return null;
}

ageRestriction(control:FormControl){
  if(control.value > 60){
    return {ageRestriction: true}
  }
  return null;
}
}   
  
   
                                         
  





  
  
