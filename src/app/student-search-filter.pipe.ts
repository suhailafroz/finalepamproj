import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from './components/model/IStudents';

@Pipe({
  name: 'studentSearchFilter'
})

export class StudentSearchFilterPipe implements PipeTransform {

  transform(students: IStudent[], searchTerm: string): IStudent[] {
    return students.filter(student => {
      return student.name.search(new RegExp(searchTerm, 'i')) > -1
    })
  }
}
