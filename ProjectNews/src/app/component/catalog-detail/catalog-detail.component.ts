import {ApplicationRef, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as xml2js from "xml2js";
import {RSSNews} from "../../model/NewsRSS";
import {ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import {DataService} from "../../service/data.service";
import {Observable} from "rxjs";
import axios from "axios";
import cheerio, {html} from "cheerio";
import {response} from "express";

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent implements OnInit, OnDestroy {
  RssData: RSSNews;

  constructor(private http: HttpClient, private route: ActivatedRoute, private  service: DataService,private router: Router) {
    route.params.subscribe(val => {
      let id = this.route.snapshot.params.id;
      this.getRssFeedData(id);
    })
  }

  getRssFeedData(paramater: string) {
    this.service.getDataRss(paramater).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssData = result;
      });
    });
  }

  forRange(start: number, end: number) {
    const array = [];
    for (let n = start; n < end; n++) {
      array.push(n);
    }
    return array;
  }

  reloadCurrentRoute() {

  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
