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
            icon: 'pi pi-file-excel',
            routerLink: '/file-upload',
          },
          {
            label: 'Tree Diagram',
            icon: 'pi pi-server',
            routerLink: '/tree-diagram',
          },
        ],
      },
    ];
  }
}
