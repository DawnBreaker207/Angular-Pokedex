import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  navOpen = false;
  constructor() {}
  ngOnInit(): void {
    console.log(`Hello world`);
  }
}
