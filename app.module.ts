import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us.component';
import { HomeComponent } from './home.component';
import { TagPipe } from './pipes/tag.pipe';
import { StudentService } from './services/students.service';
import { StudentDetailsComponent } from './student-details.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([
    { path:'', redirectTo:'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'student-details/:id', component: StudentDetailsComponent }
  ])],
  declarations: [AppComponent, HomeComponent, AboutUsComponent, ContactUsComponent, StudentDetailsComponent,TagPipe],
  bootstrap: [AppComponent],
  providers: [StudentService]
})

export class AppModule {
}
