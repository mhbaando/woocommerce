import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  Cssclass: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.Cssclass = !this.Cssclass;
  }
}
