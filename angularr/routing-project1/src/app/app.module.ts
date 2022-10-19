import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StudentDetailComponent } from './student-detail/student-detail.component';
// import { DomainDetailComponent } from './domain-detail/domain-detail.component';
// import { ResultComponent } from './result/result.component';
// import { ContactComponent } from './contact/contact.component';
// import { StudentComponent } from './student/student.component';
// import { DomainComponent } from './domain/domain.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
