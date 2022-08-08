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


  @ViewChildren('listItem')
  public listItems!: QueryList<ElementRef<HTMLLIElement>>

  showEsports: boolean = false;
  showBongDaViet: boolean = false;
  showBongDaQte: boolean = false;
  showTheThao: boolean = false;
  showXe: boolean = false;
  showVo: boolean = false;
  showXuHuong: boolean = false;

  toggleItemDropDown() {
/*    this.showEsports = false;
    this.showBongDaViet = false;
    this.showBongDaQte = false;
    this.showTheThao = false;
    this.showXe = false;
    this.showVo = false;
    this.showXuHuong = false;*/
    this.listItems.forEach(x => {

      x.nativeElement.style.display = 'none'
    })
  }
}
