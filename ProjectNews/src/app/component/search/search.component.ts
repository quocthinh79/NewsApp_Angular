import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  filterTerm: string;
  showSearch: boolean = false;

  constructor(private http: HttpClient, private service: DataService) {
  }

  getRssFeedDataSearch(parameter: string) {
    this.service.getDataRss(parameter).subscribe(data => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result: RSSNews) => {
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

  @ViewChild("inputSearch") inputSearch: ElementRef;

  onChange() {
    if (this.filterTerm.length === 1) {
      this.showSearch = false;
    } else {
      this.showSearch = true;
    }
  }

  ngOnInit(): void {
    this.getRssFeedDataSearch("trang-chu")
    this.getRssFeedDataSearch("bong-da-viet-nam-c1")
    this.getRssFeedDataSearch("bundes-liga-c65")
    this.getRssFeedDataSearch("bong-da-quoc-te-c2")
  }
}
