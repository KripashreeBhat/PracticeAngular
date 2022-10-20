import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public hide=true;
  signinForm : FormGroup;
  constructor(private fb:FormBuilder ,public dialog: MatDialog) { }
  get form(){
    return this.signinForm.get;
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      usn: new FormControl(""),
      password:new FormControl("",[Validators.required,Validators.minLength(6)])
  });

}
onSignin(){}
openDialogBox(){
  let dialogRef=this.dialog.open(DialogBoxComponent);
  dialogRef.afterClosed().subscribe(result=>{
    console.log('result of dialog:${result}');
    
  })
  
}
}