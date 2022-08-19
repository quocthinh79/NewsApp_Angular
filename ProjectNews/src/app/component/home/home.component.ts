import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as xml2js from "xml2js";
import {RSSNews} from "../../model/NewsRSS";
import {DataService} from "../../service/data.service";
import {val} from "cheerio/lib/api/attributes";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  RssDataHome: RSSNews;
  RssBongDaVN: RSSNews;
  RssBundesliga: RSSNews;
  RssQuocTe: RSSNews;
  RssAll: RSSNews[] = [];
  showParent: boolean = true;

  showElementParent(value: boolean) {
    this.showParent = !value;
  }

  constructor(private http: HttpClient, private service: DataService) {
  }

  getRssFeedDataHome(parameter: string) {
    this.service.getDataRss(parameter).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssDataHome = result;
        this.RssAll.push(result)
      });
    });
  }

  getRssDataBongDaVN(parameter: string) {
    this.service.getDataRss(parameter).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssBongDaVN = result;
        this.RssAll.push(result)
      });
    });
  }

  getRssDataBundesliga(parameter: string) {
    this.service.getDataRss(parameter).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssBundesliga = result;
        this.RssAll.push(result)
      });
    });
  }

  getRssDataQuocTe(parameter: string) {
    this.service.getDataRss(parameter).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssQuocTe = result;
        this.RssAll.push(result)
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

  reloadPage(uri: string) {
    location.href = uri;
    window.open(location.href)
  }

  ngOnInit(): void {
    this.getRssFeedDataHome("trang-chu")
    this.getRssDataBongDaVN("bong-da-viet-nam-c1")
    this.getRssDataBundesliga("bundes-liga-c65")
    this.getRssDataQuocTe("bong-da-quoc-te-c2")
  }
}
