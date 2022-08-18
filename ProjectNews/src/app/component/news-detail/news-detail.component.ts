import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RSSNews} from "../../model/NewsRSS";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private service: DataService) {
    route.params.subscribe( val => {
      let id = this.route.snapshot.params.id;

    })

  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
