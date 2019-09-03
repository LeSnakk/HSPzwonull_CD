import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AnmeldungenService} from '../../anmeldungen.service';



@Component({
  selector: 'app-detail-kurs',
  templateUrl: './detail-kurs.component.html',
  styleUrls: ['./detail-kurs.component.scss']
})

export class DetailKursComponent implements OnInit {

  public courseID;
  public courseData;

  public anmeldungen;
  public title;



  constructor(private route: ActivatedRoute, private http: HttpClient, private anmeldungenService: AnmeldungenService) { }

  anmelden(event, Tag, Startzeit, Endzeit, Ort) {
    this.anmeldungenService.tempKursName = this.courseData[0].title;
    this.anmeldungenService.tempKursID = this.courseID;
    this.anmeldungenService.tempKursTag = Tag;
    this.anmeldungenService.tempKursStart = Startzeit;
    this.anmeldungenService.tempKursEnde = Endzeit;
    this.anmeldungenService.tempKursOrt = Ort
    console.log(JSON.stringify(this.anmeldungenService.temp1));
    if (((localStorage.getItem('liste')) === null) || ((localStorage.getItem('liste')).indexOf('"Name":"' + this.courseData[0].title + '","ID":"' + this.courseID + '","Tag":"' + Tag + '","Start":"' + Startzeit + '","Ende":"' + Endzeit + '","Ort":"' + Ort + '"') === -1)) {
      this.anmeldungenService.setAnmeldungen();
      window.location.reload();
    }

  }


  /*abmelden() {
  localStorage.removeItem('liste');
  }*/

  abmelden(event, Tag, Startzeit, Endzeit, Ort) {
    this.anmeldungenService.tempKursName = this.courseData[0].title;
    this.anmeldungenService.tempKursID = this.courseID;
    this.anmeldungenService.tempKursTag = Tag;
    this.anmeldungenService.tempKursStart = Startzeit;
    this.anmeldungenService.tempKursEnde = Endzeit;
    this.anmeldungenService.tempKursOrt = Ort
    console.log(JSON.stringify(this.anmeldungenService.temp1));
    if (((localStorage.getItem('liste')) !== null) && ((localStorage.getItem('liste')).indexOf('"Name":"' + this.courseData[0].title + '","ID":"' + this.courseID + '","Tag":"' + Tag + '","Start":"' + Startzeit + '","Ende":"' + Endzeit + '","Ort":"' + Ort + '"') !== -1)) {
      this.anmeldungenService.removeAnmeldungen();

    }

  }

  ngOnInit() {

    this.courseID = this.route.snapshot.paramMap.get('id');

    this.http.get('https://hochschulsport-koeln.de/json/course/' + this.courseID + '/?_format=json')
      .subscribe((data) => {
        this.courseData = data;
      });
  }

}


