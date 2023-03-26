import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RSSNews } from '../model/NewsRSS';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDataRss(parameter: string): Observable<any> {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers':
          'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      },
    };
    return this.http.get<Observable<RSSNews>>(
      'https://thethao247.vn/' + parameter + '.rss',
      requestOptions
    );
  }

  getDataHtml(parameter: string) {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers':
          'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      },
    };
    return this.http.get<Observable<any>>(
      'https://thethao247.vn/' + parameter + '.html',
      requestOptions
    );
  }
}
