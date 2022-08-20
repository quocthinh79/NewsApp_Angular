import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataService} from "../../service/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NewsDetailComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private service: DataService) {
    route.params.subscribe(val => {
      let id = this.route.snapshot.params.detail;
      this.getContentData(id);
    })
  }

  @ViewChild('divID') divID: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('time') time: ElementRef;

  getContentData(parameter: string) {
    const cheerio = require('cheerio')
    this.service.getDataHtml(parameter).subscribe(response => {
      const html = response
      const $ = cheerio.load(html)
      let links = $("p > a[target='_blank']");
      for (let index = 0; index <= links.length; index++) {
        let linkInHref = $(links[index]).attr("href");
        let link = ""
        if (linkInHref !== undefined) {
          link = "detail/" + linkInHref.slice(linkInHref.lastIndexOf("/") + 1, linkInHref.lastIndexOf("."))
        }
        $(links[index]).removeAttr("href")
        $(links[index]).removeAttr("target")
        $(links[index]).attr("routerLink", "" + link + "")
        $(links[index]).attr("href", "" + link + "")
      }

      this.title.nativeElement.innerHTML = $('#title_detail').html();
      this.divID.nativeElement.innerHTML = $('#content_detail').html();
      this.time.nativeElement.innerHTML = $('.time').html();

      //remove advertiserment
      $('.ad-label').empty();

      //move data-src to src and remove src to display img
      let img = (<HTMLElement>this.divID.nativeElement).querySelectorAll('.lazyload');


      //set img src
      for (let i = 0; i <= img.length; i++) {
        let src = img[i].getAttribute("data-src")
        img[i].setAttribute("src", "" + src + "");
        img[i].removeAttribute("data-src");
        img[i].classList.add("img-content")
      }

      //scale iframe video

      $("iframe").setAttribute("width", "100%")
      $("iframe").setAttribute("height", "100%")

      //
      let figureContent = (<HTMLElement>this.divID.nativeElement).getElementsByTagName("figure")
      for (let j = 0; j < img.length; j++) {
        figureContent[j].classList.add('d-flex', 'flex-1', 'justify-content-center', 'align-items-center')
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
