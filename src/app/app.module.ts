import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.AppRoutingModule';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { StudentService } from '../services/student/student.service';
import {StudentListComponent} from './students/student-list/student-list.component';
import { StudentComponent } from './students/student/student.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    StudentComponent,
    StudentFormComponent,
    StudentListComponent,
    HeaderComponent // All the components needs to be declared
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Import all dependencies
    ​HttpClientModule, //api.myjson.com/bins/ck44c
    AppRoutingModule
  ],
  providers: [TicketService], // All the services need to be provided
  providers: [StudentService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
