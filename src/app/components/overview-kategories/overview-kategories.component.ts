import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-overview-kategories',
  templateUrl: './overview-kategories.component.html',
  styleUrls: ['./overview-kategories.component.scss']
})

export class OverviewKategoriesComponent implements OnInit {

  public kategories;

  constructor(private http: HttpClient) {
    this.kategories = [];
  }

  ngOnInit() {

    this.http.get('./assets/categories.json')
      .subscribe((data) => {
        this.kategories = data;
      });
  }
}
