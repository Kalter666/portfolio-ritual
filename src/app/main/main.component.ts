import { Component, OnInit } from '@angular/core';
import { description } from './images';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  description;

  constructor() {
    this.description = description;
  }

  ngOnInit() {
  }

}
