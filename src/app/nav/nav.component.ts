import { Component, OnInit } from '@angular/core';
import { Path } from '../models/path.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  paths: Path[];
  constructor() {
    this.paths = [
      {title: 'Nav-Link1', url: '/'},
      {title: 'Nav-Link2', url: '/'},
      {title: 'Nav-Link3', url: '/'},
      {title: 'Nav-Link4', url: '/'},
      {title: 'Nav-Link5', url: '/'}
    ];
   }

  ngOnInit() {
  }

}
