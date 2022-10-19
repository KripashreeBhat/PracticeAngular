import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DomainDetailComponent } from './domain-detail/domain-detail.component';
import { DomainComponent } from './domain/domain.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  {
    path: 'student/:id',
    component: StudentDetailComponent,
    children: [
      { path: 'result', component: ResultComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: 'domain', component: DomainComponent },
  { path: 'domain/:name', component: DomainDetailComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  StudentComponent,
  DomainComponent,
  StudentDetailComponent,
  DomainDetailComponent,
  ResultComponent,
  ContactComponent,
  PageNotFoundComponent,
];
