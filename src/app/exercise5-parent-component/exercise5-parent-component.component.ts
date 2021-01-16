import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise5-parent-component',
  templateUrl: './exercise5-parent-component.component.html',
  styleUrls: ['./exercise5-parent-component.component.css']
})
export class Exercise5ParentComponentComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: no-inferrable-types
  dataFromParent: string = 'Angular';

  labelToShowData: string | undefined;

  uppercasedLabel: string | undefined;

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getDataFromChild(event: string){

    this.uppercasedLabel = event.toUpperCase();

    // tslint:disable-next-line: quotemark
    this.labelToShowData = "This is the parent component. I have received \"" + event +
    // tslint:disable-next-line: quotemark
    "\" from the child Component. And I have converted that string to \"" + this.uppercasedLabel + "\".";
  }

}
