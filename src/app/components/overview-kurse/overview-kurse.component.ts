import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-overview-kurse',
  templateUrl: './overview-kurse.component.html',
  styleUrls: ['./overview-kurse.component.scss']
})

export class OverviewKurseComponent implements OnInit {

  public kategorieID;
  public kategorieData;
  public headline;

  constructor(private route: ActivatedRoute, private http: HttpClient) {  }

  ngOnInit() {

    this.kategorieID = this.route.snapshot.paramMap.get('id');

    const headline = this.headline;

    this.http.get('https://hochschulsport-koeln.de/json/courses/' + this.kategorieID + '/?_format=json')
      .subscribe((data) => {
        this.kategorieData = data;
      });
  }
}
