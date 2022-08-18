import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../service/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RSSNews} from "../../model/NewsRSS";
import {HttpClient} from "@angular/common/http";
import * as xml2js from "xml2js";
import cheerio from "cheerio";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  dataHtml: any;

  constructor(private route: ActivatedRoute, private service: DataService) {
    route.params.subscribe( val => {
      let id = this.route.snapshot.params.detail;
      this.getHtmlData(id);
    })
  }

  @ViewChild('divID') divID: ElementRef;

  getHtmlData(parameter: string) {
    const cheerio = require('cheerio')
    this.service.getDataHtml(parameter).then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      /*this.dataHtml = $('#content_detail').html();*/
      this.divID.nativeElement.innerHTML = $('#content_detail').html();
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
