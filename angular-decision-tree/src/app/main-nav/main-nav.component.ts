import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  sidenavWidth = 4;
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;

  constructor() {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'File Upload',
            icon: 'pi pi-external-link',
            routerLink: '/file-upload',
          },
          {
            label: 'Tree Diagram',
            icon: 'pi pi-upload',
            routerLink: '/tree-diagram',
          },
        ],
      },
    ];
  }
}
