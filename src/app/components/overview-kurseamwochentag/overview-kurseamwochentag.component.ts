import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overview-kurseamwochentag',
  templateUrl: './overview-kurseamwochentag.component.html',
  styleUrls: ['./overview-kurseamwochentag.component.scss']
})
export class OverviewKurseamwochentagComponent implements OnInit {


  public weekdayID;
  public weekdayData;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {

    this.weekdayID = this.route.snapshot.paramMap.get('id');


    this.http.get('https://hochschulsport-koeln.de/json/coursesbyweekday/' + this.weekdayID + '/?_format=json')
      .subscribe((data) => {
        this.weekdayData = data;
      });
  }
}
