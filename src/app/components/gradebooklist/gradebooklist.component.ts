import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentdetailsComponent } from '../studentdetails/studentdetails.component';

import { StudentService } from 'src/app/student.service';
import { IStudent } from '../model/IStudents';
import { NgxSpinnerService } from 'ngx-spinner';
import { StatisticsComponent } from '../statistics/statistics.component';



@Component({
  selector: 'app-gradebooklist',
  templateUrl: './gradebooklist.component.html',
  styleUrls: ['./gradebooklist.component.css']
})
export class GradebooklistComponent implements OnInit {

  students: IStudent[] = []
  searchTerm = '';
  HighlightRow: number = -1
  ClickedRow: any;
  // public currentStudent: string = '';
  selectedRow: number = -1
  direction: boolean = true
  gradeDirection: boolean = true
  studentsCopy: IStudent[] = []
  passedCount = 0
  failedCount = 0
  isAscendingSort = true;

  isAll: boolean = false;
  isPassed: boolean = false;
  isFailed: boolean = false;

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  constructor(private studentService: StudentService, public dialog: MatDialog, private spinner: NgxSpinnerService) {
    this.ClickedRow = function (event: any, student: IStudent) {
      if (event.srcElement.cellIndex !== 7) {
        if (event.path[0].innerHTML !== 'open_in_new') {
          console.log(event);
          // this.currentStudent = student.name
          this.students.find((stu) => {
            if (stu.ticketNumber === student.ticketNumber) {
              stu.highlighted = !stu.highlighted
            }
          })
        }
      }
    }
  }

  ngOnInit(): void {
    // Fetching the students details 
    this.students = this.studentService.getStudents()
    this.studentsCopy = [...this.students]
  }

  // Pagination Code Goes Here
  onTableDataChange(event: any) {
    this.page = event;
    this.displayAll();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.displayAll();
  }

  //Function that displays the all the students
  displayAll() {
    this.students = this.studentsCopy;
    this.isAll = true;
    this.isPassed = false;
    this.isFailed = false;
  }

  //Function that displays the students whose status is Passed
  displayPassed() {
    this.students = this.studentsCopy.filter((student) => student.status === 'passed');
    this.isAll = false;
    this.isPassed = true;
    this.isFailed = false;
  }

  //Function that displays the students whose status is Failed
  displayFailed() {
    this.students = this.studentsCopy.filter((student) => student.status === 'failed');
    this.isAll = false;
    this.isPassed = false;
    this.isFailed = true;
  }

  //Function that sorts the Students by Name 
  sortByName() {
    this.students = [...this.studentsCopy]
    this.students.sort((a, b) => {

      if (a.name > b.name) {
        return this.isAscendingSort ? 1 : -1;
      }
      else if (a.name < b.name) {
        return this.isAscendingSort ? -1 : 1;
      }
      else {
        return 0
      }
    })
    this.isAscendingSort = !this.isAscendingSort;
  }

  sortByGrade() {
    this.students = [...this.studentsCopy];
    this.students.sort((a, b) => {

      if (a.finalGrade > b.finalGrade) {
        return this.gradeDirection ? 1 : -1;
      }
      else if (a.finalGrade < b.finalGrade) {
        return this.gradeDirection ? -1 : 1;
      }
      else {
        return 0
      }
    })
    this.gradeDirection = !this.gradeDirection;
  }

  showDialog(index: any) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    const dialogRef = this.dialog.open(StudentdetailsComponent, {
      width: '450px',
      height: '300px',
      data: this.students[index],
      disableClose: false
    });
    // setTimeout(() => {
    //   dialogRef.close();
    // }, 10000);
  }
  //Function that highlights the  selectedRow
  setClickedRow(index: number) {
    this.selectedRow = index;
    console.log(index)
  }

  showStatistics() {
    const dialogRef = this.dialog.open(StatisticsComponent, {
      width: '60%',
      height: '80%',
      // data: this.students[index],
      disableClose: true
    });
  }

  //   constructor(private studentService: StudentService, public dialog: MatDialog) { }
  //   studentsList: Array<IStudents> = []

  //   ngOnInit(): void {
  //     this.studentsList = this.studentService.getStudents();
  //     console.log(this.studentService.getStudents())
  //   }


  //   openDialog(index: any) {
  //     const dialogConfig = new MatDialogConfig();

  //     dialogConfig.disableClose = false;
  //     dialogConfig.autoFocus = false;

  //     dialogConfig.data = this.studentsList[index];
  //     dialogConfig.width = '400px'

  //     this.dialog.open(StudentdetailsComponent, dialogConfig);
  //     // console.log(this.studentsList);
  //   }

}
