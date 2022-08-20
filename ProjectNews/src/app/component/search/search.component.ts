import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {RSSNews} from "../../model/NewsRSS";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../service/data.service";
import * as xml2js from "xml2js";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  RssAll: RSSNews[] = [];
  filterTerm: string = '';
  showSearch: boolean = false;

  @Output() showEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private service: DataService) {
    this.getHtmlData("rss")
  }

  getRssFeedDataSearch(parameter: string) {
    this.service.getDataRss(parameter).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
        this.RssAll.push(result)
      });
    });
  }

  @ViewChild("inputSearch") inputSearch: ElementRef;
  onChange() {
    if (this.inputSearch.nativeElement.value === '') {
      this.showSearch = false;
    } else {
      this.showSearch = true;
    }
    this.showEvent.emit(this.showSearch)
  }

  getHtmlData(parameter: string) {
    const cheerio = require('cheerio')
    this.service.getDataHtml(parameter).subscribe(response => {
      const html = response
      const $ = cheerio.load(html)
      $('.rss_txt').each((index: any, element: any) => {
        if (!$(element).text().includes("|")) {
          let url = $(element).attr('href')?.slice($(element).attr('href')?.lastIndexOf("/") + 1, $(element).attr('href')?.lastIndexOf("."))
          this.getRssFeedDataSearch(url)
          console.log($(element).text())
        }
      })
    })
  }

  ngOnInit(): void {
  }
}
