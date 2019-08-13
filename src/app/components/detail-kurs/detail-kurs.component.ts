import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

let anmeldungen;

@Component({
  selector: 'app-detail-kurs',
  templateUrl: './detail-kurs.component.html',
  styleUrls: ['./detail-kurs.component.scss']
})


export class DetailKursComponent implements OnInit {

  public courseID;
  public courseData;
  public anmeldungen;



  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  anmelden() {
    anmeldungen = this.courseID;
    this.anmeldungen = anmeldungen;
    localStorage.setItem('angemeldet', JSON.stringify({ID: this.courseID, Name: this.courseData[0].title}));
    console.log(JSON.parse(localStorage.getItem('angemeldet')));
  }
  abmelden() {
  localStorage.removeItem('angemeldet');
  }

  ngOnInit() {

    this.courseID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/course/' + this.courseID + '/?_format=json')
      .subscribe((data) => {
        this.courseData = data;
      });
  }

}


