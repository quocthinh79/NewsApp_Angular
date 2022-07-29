import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as xml2js from "xml2js";
import {RSSNews} from "../../model/NewsRSS";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.scss']
})
export class CatalogDetailComponent implements OnInit, OnDestroy {
  RssData: RSSNews;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private feed: DataService) {
    route.params.subscribe(val => {
      let id = this.route.snapshot.params.id;
      this.RssData = feed.GetRssFeedData(id)
    })
  }

  forRange(start: number, end: number) {
    const array = [];
    for (let n = start; n < end; n++) {
      array.push(n);
    }
    return array;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
