import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
	sidenavWidth = 4;

	constructor(private router: Router) {}

	ngOnInit() {}

	increase() {
		this.sidenavWidth = 15;
		console.log('increase sidenav width');
	}
	decrease() {
		this.sidenavWidth = 4;
		console.log('decrease sidenav width');
	}
}
