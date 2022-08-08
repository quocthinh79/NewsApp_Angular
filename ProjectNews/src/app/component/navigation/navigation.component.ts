import {Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import $ from 'jquery';

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
  @ViewChild("main_nav") mainNav: ElementRef;

  clickButtonNav() {
    if (this.mainNav.nativeElement.style.display === '' || this.mainNav.nativeElement.style.display === 'none') {
      this.mainNav.nativeElement.style.display = 'flex'
    } else {
      this.mainNav.nativeElement.style.display = 'none'
    }
  }

  @ViewChildren('itemNav')
  public itemNav!: QueryList<ElementRef<HTMLLIElement>>
  clickItemNav() {
    $(this).closest('.nav-item dropdown').css('display')
    console.log()
    this.itemNav.forEach(x => {
      console.log(x.nativeElement.closest('.nav-item dropdown'))
    })
  }

}
