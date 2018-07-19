import { Component, Input, OnInit } from '@angular/core';
import { prefix } from '../images';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  prefix;
  @Input() image;
  @Input() info;

  constructor() {
    this.prefix = prefix;
  }

  ngOnInit() {
  }

}
