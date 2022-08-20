import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../service/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {

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
    this.service.getDataHtml(parameter).subscribe(response => {
      const html = response
      const $ = cheerio.load(html)
      this.title.nativeElement.innerHTML = $('#title_detail').html();
      this.divID.nativeElement.innerHTML = $('#content_detail').html();
      this.time.nativeElement.innerHTML = $('.time').html();
      let img = (<HTMLElement>this.divID.nativeElement).querySelectorAll('.lazyload');
      for(let i = 0; i <= img.length; i++) {
        console.log(img[i]);
        let src = img[i].getAttribute("data-src")
        console.log(src)
        img[i].setAttribute("src", "" + src + "");
        img[i].removeAttribute("data-src")

      }
      console.log((<HTMLElement>this.divID.nativeElement).getElementsByClassName('.sapo_detail'))



      this.time.nativeElement.innerHTML = $('.time').html();
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
