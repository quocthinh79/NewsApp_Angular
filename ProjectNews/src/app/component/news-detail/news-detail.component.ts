import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataService} from "../../service/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RSSNews} from "../../model/NewsRSS";
import {HttpClient} from "@angular/common/http";
import * as xml2js from "xml2js";
import cheerio from "cheerio";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NewsDetailComponent implements OnInit, OnDestroy {
  dataHtml: any;

  constructor(private route: ActivatedRoute, private service: DataService) {
    route.params.subscribe( val => {
      let id = this.route.snapshot.params.detail;
      this.getContentData(id);
    })
  }

  @ViewChild('divID') divID: ElementRef;
  @ViewChild('title') title:ElementRef;
  @ViewChild('time') time: ElementRef;

  getContentData(parameter: string) {
    const cheerio = require('cheerio')
    this.service.getDataHtml(parameter).then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      this.title.nativeElement.innerHTML = $('#title_detail').html();
      this.divID.nativeElement.innerHTML = $('#content_detail').html();
      this.time.nativeElement.innerHTML = $('.time').html();
      //move data-src to src and remove src to display img
      let img = (<HTMLElement>this.divID.nativeElement).querySelectorAll('.lazyload');
      for(let i = 0; i <= img.length; i++) {
        let src = img[i].getAttribute("data-src")
        img[i].setAttribute("src", "" + src + "");
        img[i].removeAttribute("data-src");
        img[i].classList.add("img-content")
      }

      //
      let figureContent = (<HTMLElement>this.divID.nativeElement).getElementsByTagName("figure")
      for(let j = 0; j< img.length; j++) {
        console.log(figureContent[j])
        figureContent[j].classList.add('d-flex','flex-1','justify-content-center','align-items-center')
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
