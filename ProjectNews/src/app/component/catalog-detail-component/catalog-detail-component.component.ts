import {ApplicationRef, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as xml2js from "xml2js";
import {RSSNews} from "../../model/NewsRSS";
import {ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-catalog-detail-component',
  templateUrl: './catalog-detail-component.component.html',
  styleUrls: ['./catalog-detail-component.component.scss']
})
export class CatalogDetailComponentComponent implements OnInit, OnDestroy {
  RssData: RSSNews;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(val => {
      let id = this.route.snapshot.params.id;
      this.GetRssFeedData(id);
    })
  }

  GetRssFeedData(paramater: string) {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://thethao247.vn/" + paramater + ".rss", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: RSSNews) => {
          this.RssData = result;
        });

      });
    return this.RssData
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
