import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-overview-week',
  templateUrl: './overview-week.component.html',
  styleUrls: ['./overview-week.component.scss']
})

export class OverviewWeekComponent implements OnInit {

  public weekdays;

  constructor(private http: HttpClient) {
    this.weekdays = [];
  }

  ngOnInit() {

    this.http.get('./assets/weekdays.json')
      .subscribe((data) => {
        this.weekdays = data;
      });
  }
}
