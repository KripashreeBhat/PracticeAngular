import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { DomainDetailComponent } from "./domain-detail/domain-detail.component";
import { DomainComponent } from "./domain/domain.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ResultComponent } from "./result/result.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentComponent } from "./student/student.component";
import { AdmissionFormComponent } from "./admission-form/admission-form.component";
import { FacultyAdmissionComponent } from "./faculty-admission/faculty-admission.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

const routes: Routes = [
  { path :"sidenav", component:SidenavComponent},
  { path: "", redirectTo: "/student", pathMatch: "full" },
  { path: "student", component: StudentComponent },
  {
    path: "student/:id",
    component: StudentDetailComponent,
    children: [
      { path: "result", component: ResultComponent },
      { path: "contact", component: ContactComponent },
    ],
  },
  { path: "domain", component: DomainComponent },
  { path: "domain/:name", component: DomainDetailComponent },
  { path: "admission-form", component: AdmissionFormComponent },
  { path: "post-admission", component: FacultyAdmissionComponent },
  { path:"sign-in",component:SignInComponent},
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  SidenavComponent,
  StudentComponent,
  DomainComponent,
  StudentDetailComponent,
  DomainDetailComponent,
  ResultComponent,
  ContactComponent,
  AdmissionFormComponent,
  FacultyAdmissionComponent,
  SignInComponent,
  PageNotFoundComponent,
];
