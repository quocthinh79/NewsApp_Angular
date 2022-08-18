import {Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private elRef: ElementRef) {
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

  @ViewChild('main_nav') main_nav: ElementRef;

  reload(event: any, uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
    console.log(event)
    if (document.documentElement.clientWidth <= 990) {
      if (event.path[1].className != 'nav-item dropdown') {
        this.main_nav.nativeElement.style.display = 'none'
      }
    } else {
      this.listItems.forEach(x => {
        x.nativeElement.style.display = 'none'
      })
    }
  }

  hover() {
    this.listItems.forEach(x => {
      x.nativeElement.removeAttribute("style")
    })
  }

  navbarFixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 0) {
      this.navbarFixed = true;
      this.listItems.forEach(x => {
        x.nativeElement.style.display = 'none'
      })
      this.main_nav.nativeElement.style.display = 'none'
      this.listItems.forEach(x => {
        x.nativeElement.removeAttribute("style")
      })
    } else {
      this.navbarFixed = false
    }
  }
}
