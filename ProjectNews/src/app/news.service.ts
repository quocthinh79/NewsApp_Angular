import { Injectable } from '@angular/core';
import {Catalog} from "../model/catalog";

import * as rxjs from "rxjs";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private catalogURL = 'https://thethao247.vn/lien-minh-huyen-thoai-c181.rss';
  getNews():Observable<Catalog[]> {
      return this.http.get<Catalog[]>(this.catalogURL).pipe();
      tap(receiveNews => console.log(`Receive = ${JSON.stringify(receiveNews)}`)),
      catchError(err => of([]))
  }

  constructor(
    private http: HttpClient
  ) { }
}
