import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  navbarFixed:boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(){
    if (window.scrollY > 0){
      this.navbarFixed = true
    } else {
      this.navbarFixed = false
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {

  }

}
