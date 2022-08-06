import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  stuDetails: any;
  constructor(private dialogRef: MatDialogRef<StudentdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.stuDetails = data;
  }

  ngOnInit(): void {
    console.log(this.stuDetails);
  }
}
