import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  RssData: NewsRss;
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
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }

  ngOnInit(): void {
    this.GetRssFeedData();
  }

}

export interface IRssData {}
