import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Exercise2AverageMarksService {

  constructor() { }
  studentData: StudentMarks[] = [
    {
      Name: 'Shivam',
      Subject1: 85,
      Subject2: 90,
      Subject3: 95
    },
    {
      Name: 'Jaimin',
      Subject1: 80,
      Subject2: 80,
      Subject3: 95
    },
    {
      Name: 'Jaydeep',
      Subject1: 85,
      Subject2: 80,
      Subject3: 90
    },
  ];
}

export class StudentMarks{
  // tslint:disable-next-line: no-inferrable-types
  Name: string = '';
  // tslint:disable-next-line: no-inferrable-types
  // tslint:disable-next-line: no-inferrable-types
  Subject1: number = 0;
  // tslint:disable-next-line: no-inferrable-types
  Subject2: number = 0;
  // tslint:disable-next-line: no-inferrable-types
  Subject3: number = 0;
}
