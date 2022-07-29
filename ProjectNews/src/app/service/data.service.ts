import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RSSNews} from "../model/NewsRSS";
import * as xml2js from "xml2js";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(paramater: string) : Observable<any> {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return this.http
      .get<Observable<any>>("https://thethao247.vn/" + paramater + ".rss", requestOptions);
  }
}
