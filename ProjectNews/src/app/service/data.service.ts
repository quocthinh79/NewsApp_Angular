import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
      responseType: "text",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Headers" : "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
      }
    };
    return this.http
      .get<Observable<any>>("https://thethao247.vn/" + paramater + ".rss", requestOptions);
  }
}
