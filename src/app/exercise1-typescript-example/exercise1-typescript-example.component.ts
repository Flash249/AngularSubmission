import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1-typescript-example',
  templateUrl: './exercise1-typescript-example.component.html',
  styleUrls: ['./exercise1-typescript-example.component.css']
})
export class Exercise1TypescriptExampleComponent implements OnInit {

  constructor(){​​​​
    // tslint:disable-next-line: quotemark
    console.log("State: unliked");
    // tslint:disable-next-line: quotemark
    console.log("Likes: 0");
  }​​​​

  // tslint:disable-next-line: no-inferrable-types
  num: number = 0;

  getLikes(): void
  {​​​​
    // tslint:disable-next-line: triple-equals
    if (this.num == 0)
    {​​​​
      this.num++;
      // tslint:disable-next-line: quotemark
      console.log("State: liked");
      // tslint:disable-next-line: quotemark
      console.log("Likes: " + this.num);
    } ​​​​
    else
    {​​​​
      this.num--;
      // tslint:disable-next-line: quotemark
      console.log("State: unliked");
      // tslint:disable-next-line: quotemark
      console.log("Likes: " + this.num);
    }​​​​
  }​​
​
  ngOnInit(): void {
  }

}
