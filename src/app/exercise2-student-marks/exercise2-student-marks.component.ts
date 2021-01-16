import { Exercise2AverageMarksService, StudentMarks } from './../exercise2-average-marks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2-student-marks',
  templateUrl: './exercise2-student-marks.component.html',
  styleUrls: ['./exercise2-student-marks.component.css']
})
export class Exercise2StudentMarksComponent implements OnInit {

  information: StudentMarks[] = [];
  constructor(private Exercise2AverageMarksService: Exercise2AverageMarksService) {
   }

  ngOnInit(): void {
    this.information = this.Exercise2AverageMarksService.studentData;
  }
  average (element: StudentMarks){
    return ((element.Subject1 + element.Subject2 + element.Subject3) / 3);
  }
}
