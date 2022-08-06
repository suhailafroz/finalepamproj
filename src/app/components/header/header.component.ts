import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  customOptions: OwlOptions = {
    autoplay: false, //changed to false
    autoplayTimeout: 2000,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: false //changed to false
  }

  slides = [
    {
      id: '1', img: 'https://dummyimage.com/350x150/423b42/fff',
      info: 'Course : Web Engineering',
      examTitle: 'Title: Web Engineering',
      examDate: new Date(),
      semester: 'III B.Tech I Semester'
    }, {
      id: '2',
      title: 'grade book list'
    }, {
      id: '3', img: 'https://dummyimage.com/350x150/423b42/fff',
      info: 'Course : Web Engineering',
      pName: 'Professor: Suhail Afroz',
      cName: 'CVR College of Engineering',
      dept: 'CSE Department'
    }

  ];

  constructor() { }

}
