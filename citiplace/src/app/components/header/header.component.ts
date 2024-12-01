import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Rent',
        routerLink: '',
      },
      {
        label: 'Buy',
      },
      {
        label: 'Sell',
      },
      {
        label: 'Manage Properties',
        items: [
          {
            label: 'Add Property',
            routerLink: 'add-property',
          },
        ],
      },
    ];
  }
}
