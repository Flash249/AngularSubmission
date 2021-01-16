import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise5-child-component',
  templateUrl: './exercise5-child-component.component.html',
  styleUrls: ['./exercise5-child-component.component.css']
})
export class Exercise5ChildComponentComponent implements OnInit {

  constructor() { }

  @Input() childDataReceived: string | undefined;

  // tslint:disable-next-line: align
  @Output() showChildData = new EventEmitter<string>();

  // tslint:disable-next-line: no-inferrable-types
  sendString: string = 'neo';

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  sendChildData(){
    this.showChildData.emit(this.sendString);
  }

}
