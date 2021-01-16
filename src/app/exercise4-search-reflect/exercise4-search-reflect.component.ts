import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4-search-reflect',
  templateUrl: './exercise4-search-reflect.component.html',
  styleUrls: ['./exercise4-search-reflect.component.css']
})
export class Exercise4SearchReflectComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line: no-inferrable-types
  searchText: string = '';

  ngOnInit(): void {
  }

}
