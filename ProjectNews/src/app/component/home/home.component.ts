import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as xml2js from "xml2js";
import {RSSNews} from "../../model/NewsRSS";
import {DataService} from "../../service/data.service";

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
  
  constructor(private http: HttpClient, private  service: DataService) { }

  getRssFeedDataHome(paramater: string) {
    this.service.getDataRss(paramater).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssDataHome = result;

  getRssDataBongDaVN(paramater: string) {
    this.service.getDataRss(paramater).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssBongDaVN = result;
      });
    });
  }

  getRssDataBundesliga(paramater: string) {
    this.service.getDataRss(paramater).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssBundesliga = result;
      });
    });
  }

  getRssDataQuocTe(paramater: string) {
    this.service.getDataRss(paramater).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssQuocTe = result;
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

    this.getRssFeedDataHome("trang-chu")
    this.getRssDataBongDaVN("bong-da-viet-nam-c1")
    this.getRssDataBundesliga("bundes-liga-c65")
    this.getRssDataQuocTe("bong-da-quoc-te-c2")
  }

}
