import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getDataRss(parameter: string) : Observable<any> {
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
    const CORS_PROXY = "https://calm-spire-97456.herokuapp.com/"
    return this.http
      .get<Observable<any>>(CORS_PROXY + "https://thethao247.vn/" + parameter + ".rss", requestOptions);
  }

  getDataHtml(parameter: string) {
    const CORS_PROXY = "https://calm-spire-97456.herokuapp.com/"
    return axios(CORS_PROXY + "https://thethao247.vn/" + parameter + ".html")
  }
}
