import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { ChartOptions, ChartType } from 'chart.js';
import { StudentService } from 'src/app/student.service';
import { IStudent } from '../model/IStudents';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  students: IStudent[] = []
  statisticsData: string = ' '
  gradeData: string = ''
  finalgrades: string = ''
  studentsRange: number[] = []
  passedCount: number = 0
  failedCount: number = 0

  data1: any

  isHidden = true
  isShow = true

  //Pie  CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
  }

  pieChartLabels = ['Passed', 'Failed'];

  // CHART COLOR.
  pieChartColor: any = [
    {
      backgroundColor: [
        'green',
        'yellow'
      ]
    }
  ]

  pieChartData: any = [
    {
      data: [],
      color: ['green', 'red']
    }
  ];

  //Bar Chart Options
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  // barChartLabel = ['grades']
  barChartPlugins = [];

  barChartData: any = [
    { data: [] }
  ];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents()

    this.passedCount = this.students.filter(student => student.status === 'passed').length
    this.failedCount = this.students.filter(student => student.status === 'failed').length
    // this.studentsRange[0] = this.students.filter(student => student.finalGrade >= 0 && student.finalGrade <= 3).length
    // this.studentsRange[1] = this.students.filter(student => student.finalGrade > 3 && student.finalGrade <= 5).length
    // this.studentsRange[2] = this.students.filter(student => student.finalGrade > 5 && student.finalGrade <= 7).length
    // this.studentsRange[3] = this.students.filter(student => student.finalGrade > 7 && student.finalGrade <= 10).length

    for (var i = 0; i < 10; i++) {
      this.studentsRange[i] = this.students.filter((student) => student.finalGrade === i).length
    }

    for (var i = 0; i < 10; i++) {
      if (this.studentsRange[i] != 0)
        this.finalgrades += `
        The number of students secured grade ${i} are : ${this.studentsRange[i]} <br />
      `;
    }
  }

  showStatistics(): void {
    // this.isHidden = !this.isHidden
    let averageGrade: number = 0
    let totalGrade: number = 0
    let minGrade: number = 0;
    let maxGrade: number = 0;

    minGrade = this.students.reduce((min, stu) =>
      (stu.finalGrade < min ? stu.finalGrade : min), this.students[0].finalGrade
    )

    maxGrade = this.students.reduce((max, stu) =>
      (stu.finalGrade > max ? stu.finalGrade : max), this.students[0].finalGrade
    )

    this.isShow = !this.isShow
    this.statisticsData = `<div>  <li> The total number of students ${this.students.length} <br>
                             <li>The total number of students Passed  ${this.passedCount}
                             <li>The Number of Students Failed: ${this.failedCount}
                             </div>`;

    this.students.map(student => { totalGrade += student.finalGrade })
    averageGrade = totalGrade / this.students.length
    this.gradeData = `  
                        <li> The Minimal grade secured among all students : ${minGrade}
                        <li> Them Maximal grade secured among all students : ${maxGrade}
                        <li> The average grade of the students :${averageGrade}
                        <li> The number of students less than average grade: ${this.students.filter(student => student.finalGrade < averageGrade).length}
                        <li> The number of students less than average grade: ${this.students.filter(student => student.finalGrade >= averageGrade).length}`

    // this.data1 = [{ 'data': [this.passedCount, this.failedCount] }]

    this.pieChartData = [{ 'data': [this.passedCount, this.failedCount], color: ['green', 'red'] }]
    this.barChartData = [{ 'data': [...this.studentsRange] }]


    // console.log(this.finalgrades);
  }

}



// import { Component } from '@angular/core';
// import { StudentService } from 'src/app/student.service';
// import { IStudent } from '../model/IStudents';



// @Component({
//   selector: 'app-statistics',
//   templateUrl: './statistics.component.html',
//   styleUrls: ['./statistics.component.css']
// })
// export class StatisticsComponent {

//   students: IStudent[] = []
//   constructor(private studentService: StudentService) { }


//   isShow: boolean = true;
//   showStats: string = "";

//   showStatistics() {
//     let totalGrade: number = 0;
//     let averageGrade: number = 0;
//     let minimalGrade: number = 0;
//     let maxminalGrade: number = 0;
//     let lessThanAverage: number = 0;
//     let greaterThanAverage: number = 0;
//     let showStats: string = "";
//     let passedCount: number = 0;
//     let failedCount: number = 0;
//     this.students = this.studentService.getStudents();
//     this.students.forEach((stud) => {
//       totalGrade += stud.finalGrade;

//     })

//     averageGrade = totalGrade / this.students.length;
//     lessThanAverage = this.students.filter((stud) => stud.finalGrade < averageGrade).length;
//     greaterThanAverage = this.students.filter((stud) => stud.finalGrade >= averageGrade).length;
//     passedCount = this.students.filter((stud) => stud.status === "passed").length;
//     failedCount = this.students.filter((stud) => stud.status === "failed").length;

//     this.isShow = !this.isShow;

//     this.showStats = `
//     Average Grade  : ${averageGrade} <br />
//     Lessthan Average Grade: ${lessThanAverage}
//     `
//     console.log("Statistics");
//   }
// }
