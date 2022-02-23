import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketListComponent} from './tickets/ticket-list';
import {StudentListComponent} from '././students/student-list/student-list.component';

const routes: Routes = [
  {path: 'tickets', component: TicketListComponent},
  {path: 'students', component: StudentListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
