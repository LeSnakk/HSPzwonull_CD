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

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {

    this.kategorieID = this.route.snapshot.paramMap.get('id');
    const headline = this.headline;


    this.http.get('https://hochschulsport-koeln.de/json/courses/' + this.kategorieID + '/?_format=json')
      .subscribe((data) => {
        this.kategorieData = data;
      });

    /*if (this.kategorieID === 36) {
      this.headline = 'Ballsport und Spiele';
    } else if (this.kategorieID === 1) {
      this.headline = 'Kampfsport';
    } else if (this.kategorieID === 3) {
      this.headline = 'Fitness';
    } else if (this.kategorieID === 4) {
      this.headline = 'Gesundheitssport';
    } else if (this.kategorieID === 32) {
      this.headline = 'Individualsport';
    } else if (this.kategorieID === 33) {
      this.headline = 'Natursport';
    } else if (this.kategorieID === 6) {
      this.headline = 'Tanzen';
    } else if (this.kategorieID === 34) {
      this.headline = 'Wassersport';
    } else if (this.kategorieID === 35) {
      this.headline = 'Wintersport';
    } else if (this.kategorieID === 7) {
      this.headline = 'Campus Gummersbach';*/
  }


}

