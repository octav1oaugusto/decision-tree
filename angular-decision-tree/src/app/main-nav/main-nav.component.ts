import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  sidenavWidth = 4;

  constructor() {}

  ngOnInit() {}

  increase() {
    this.sidenavWidth = 15;
  }
  decrease() {
    this.sidenavWidth = 4;
  }
}
