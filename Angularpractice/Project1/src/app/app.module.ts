import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { BackgroundDirective } from './background.directive';
// import { AdmissionFormComponent } from './admission-form/admission-form.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StudentDetailComponent } from './student-detail/student-detail.component';
// import { DomainDetailComponent } from './domain-detail/domain-detail.component';
// import { ResultComponent } from './result/result.component';
// import { ContactComponent } from './contact/contact.component';
// import { StudentComponent } from './student/student.component';
// import { DomainComponent } from './domain/domain.component';
// import { FacultyAdmissionComponent } from './faculty-admission/faculty-admission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignInComponent } from './sign-in/sign-in.component';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HoverDirective,
    BackgroundDirective,
    SignInComponent,
  
    DialogBoxComponent,
       SidenavComponent,
  ],
  entryComponents:[ DialogBoxComponent],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
