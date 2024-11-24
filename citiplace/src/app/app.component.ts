import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'citiplace';
  items: MenuItem[] | undefined;

  ngOnInit(): void {
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
