import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RSSNews} from "../model/NewsRSS";
import * as xml2js from "xml2js";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  RssData: RSSNews
  constructor(private http: HttpClient) {}
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
}
