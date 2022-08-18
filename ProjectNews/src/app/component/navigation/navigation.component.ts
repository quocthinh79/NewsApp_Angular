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

  navbarFixed: boolean = false;
  @ViewChild('myBar') myBar: ElementRef;
  @ViewChild("main_nav") mainNav: ElementRef;
  @ViewChildren('listItem')
  public listItems!: QueryList<ElementRef<HTMLLIElement>>

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit(): void {

  }

  clickButtonNav() {
    if (this.mainNav.nativeElement.style.display === '' || this.mainNav.nativeElement.style.display === 'none') {
      this.mainNav.nativeElement.style.display = 'flex'
    } else {
      this.mainNav.nativeElement.style.display = 'none'
    }
  }

  reload(event: any, uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
    if (document.documentElement.clientWidth <= 990) {
      if (event.path[1].className != 'nav-item dropdown') {
        this.mainNav.nativeElement.style.display = 'none'
        location.href = uri;
        window.open(location.href )
      }
    } else {
      this.listItems.forEach(x => {
        x.nativeElement.style.display = 'none'
        location.href = uri;
        window.open(location.href )
      })
    }
  }

  hover() {
    this.listItems.forEach(x => {
      x.nativeElement.removeAttribute("style")
    })
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    this.myBar.nativeElement.style.width = scrolled + "%";
    if (window.scrollY > 0) {
      this.navbarFixed = true;
      this.listItems.forEach(x => {
        x.nativeElement.style.display = 'none'
      })
      this.mainNav.nativeElement.style.display = 'none'
      this.listItems.forEach(x => {
        x.nativeElement.removeAttribute("style")
      })
    } else {
      this.navbarFixed = false
    }
  }
}
