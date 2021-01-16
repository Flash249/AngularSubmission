import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-exercise3-custom-pipe',
  templateUrl: './exercise3-custom-pipe.component.html',
  styleUrls: ['./exercise3-custom-pipe.component.css']
})
export class Exercise3CustomPipeComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  path: string = 'assets/Angularlogo.png';
  // tslint:disable-next-line: no-inferrable-types
  height: number = 200;
  // tslint:disable-next-line: no-inferrable-types
  width: number = 200;
  // tslint:disable-next-line: no-inferrable-types
  align: string = 'center';
  // tslint:disable-next-line: no-inferrable-types
  text: string = 'I am Shivam Soni and I\'m TR technology Intern';
  constructor() { }

  ngOnInit(): void {
  }

}

@Pipe({ name : 'textShrinker'})
// tslint:disable-next-line: class-name
export class test implements PipeTransform{
  // tslint:disable-next-line: typedef
  transform(text: string){
    if (text.length >= 20){
      return (text = text.substring(0, 20) + '...');
    }
    else{
      return text;
    }
  }
}
