import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { StudentService } from '../../../services/student/student.service';
import { Ticket } from '../../../models/ticket';
import {STUDENT_MOCKED} from '../../../mocks/students.mock';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;

  public Major_List: string[] = ['SI','GE','DS','autres'] ;
  public StudentIdList: number[] = [0,1];


  constructor(public formBuilder: FormBuilder, public ticketService: TicketService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      studentID: [''],
      title: [''],
      description: [''],
      major: ['']
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.student = STUDENT_MOCKED[ticketToCreate.studentID];
    this.ticketService.addTicket(ticketToCreate);
  }

}
