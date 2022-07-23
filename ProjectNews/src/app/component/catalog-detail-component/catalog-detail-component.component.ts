import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as xml2js from "xml2js";
import {RSSNews} from "../../model/NewsRSS";

@Component({
  selector: 'app-catalog-detail-component',
  templateUrl: './catalog-detail-component.component.html',
  styleUrls: ['./catalog-detail-component.component.scss']
})
export class CatalogDetailComponentComponent implements OnInit {
  RssData: RSSNews;
  constructor(private http: HttpClient) {}
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://thethao247.vn/lien-minh-huyen-thoai-c181.rss", requestOptions)
      .subscribe(data => {
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

  ngOnInit(): void {
    this.GetRssFeedData();
  }

}
