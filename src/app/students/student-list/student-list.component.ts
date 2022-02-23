import {Component, OnInit} from '@angular/core';
import {Student} from '../../../models/student';
import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public studentList: Student[] = [];

  constructor(public studentService: StudentService) {

    this.studentService.student$.subscribe((students) => this.studentList = students);
    console.log(this.studentList);
  }

  ngOnInit(): void {
  }
}
