import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('About Angular Pokédex');
  }
}
