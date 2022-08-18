import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getDataRss(paramater: string) : Observable<any> {
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
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    return this.http
      .get<Observable<any>>(CORS_PROXY + "https://thethao247.vn/" + paramater + ".rss", requestOptions);
  }

  getDataHtml(paramater: string) {
    const cheerio = require('cheerio')
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    axios(CORS_PROXY + "https://thethao247.vn/406-ket-qua-v-league-2022-tp-hcm-vs-hai-phong-29-07-2022-d261910.html").then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      console.log($('#content_detail').text())
      console.log($('#content_detail').html())
    })
  }
}
