import { Injectable } from '@angular/core';
import { IStudent } from './components/model/IStudents';
import { students } from './components/model/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsList: Array<IStudent> = []
  constructor() {
    students.forEach((student) => {
      student.finalGrade = 0.6 * student.examGrade + 0.4 * student.ratingGrade
      student.finalGrade = Math.round(student.finalGrade);
      if (student.finalGrade > 4) {
        student.status = 'passed'
      }
      else {
        student.status = 'failed'
      }
    })
  }

  getStudents(): IStudent[] {
    this.studentsList = students;
    return this.studentsList;
  }
}
