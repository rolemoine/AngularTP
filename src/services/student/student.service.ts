import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { STUDENT_MOCKED } from '../../mocks/students.mock';
// import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: Student[] = STUDENT_MOCKED;
  // private studentUrl = '​https://api.myjson.com/bins/ck44c';
  public student$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
  // private studentList: Student[];

  constructor() {
  // constructor(private http: HttpClient) {
    }
    getStudent(){

      console.log(this.studentList);
    }


//     getStudent():Observable<Student[]>{
//
//       this.http.get<Student[]>(this.studentUrl).subscribe((student)=>{
//         this.studentList=student;
//         this.student$.next(this.studentList)
//         console.log(student);
//       });
// }

addStudent(student: Student) {
  this.studentList.push(student)
  this.student$.next(this.studentList)

  // You need here to update the list of ticket and then update our observable (Subject) with the new list
  // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
}
    }
