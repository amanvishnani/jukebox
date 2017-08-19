import { Component } from '@angular/core';
import { MdSidenav } from "@angular/material";
@Component({
  moduleId : module.id ,  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  sideNav: number;
  profile: any = {};
  constructor() {
    this.title = 'app';
    this.sideNav = 0;
    this.profile.pic = "assets/img/user.png";
  }
  openNav(sidenav: MdSidenav) {
    this.sideNav = 1;
    sidenav.open();
  }
  closeNav(sidenav: MdSidenav) {
    this.sideNav = 0;
    sidenav.close();
  }
  swipe(e, sidenav: MdSidenav) {
    if(e==='swiperight') {
      sidenav.open();
    }
    if(e==='swipeleft') {
      sidenav.close();
    }
  }
}
