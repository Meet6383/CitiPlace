import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'citiplace';
  HeaderComponent = new HeaderComponent();

  constructor() {}

  ngOnInit() {}
}
