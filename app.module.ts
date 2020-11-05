import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us.component';
import { HomeComponent } from './home.component';
import { StudentService } from './services/students.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([
    { path:'', redirectTo:'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about-us', component: AboutUsComponent }
  ])],
  declarations: [AppComponent, HomeComponent, AboutUsComponent, ContactUsComponent],
  bootstrap: [AppComponent],
  providers: [StudentService]
})

export class AppModule {
}
