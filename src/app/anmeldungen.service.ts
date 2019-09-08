import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnmeldungenService {

  public tempKursName;
  public tempKursID;
  public tempKursTag;
  public tempKursStart;
  public tempKursEnde;
  public tempKursOrt;
  public temp1 = [];
  public temp2;
  public index;


  constructor() { }


  setAnmeldungen() {
    this.temp1 = JSON.parse(localStorage.getItem('liste')) || [];
    this.temp1.push({Name: this.tempKursName, ID: this.tempKursID, Tag: this.tempKursTag, Start: this.tempKursStart, Ende: this.tempKursEnde, Ort: this.tempKursOrt});
    localStorage.setItem('liste', JSON.stringify(this.temp1));
  }

  removeAnmeldungen() {
    this.temp2 = ({Name: this.tempKursName, ID: this.tempKursID, Tag: this.tempKursTag, Start: this.tempKursStart, Ende: this.tempKursEnde, Ort: this.tempKursOrt});
    localStorage.setItem('loeschliste', JSON.stringify(this.temp2));

    const angemeldet1 = localStorage.getItem('liste');
    const loeschauswahl1 = localStorage.getItem('loeschliste');
    const zuloeschen1 = loeschauswahl1 + ','
    const neueliste1 = angemeldet1.replace(zuloeschen1, '');
    localStorage.setItem('liste', neueliste1);

    const angemeldet2 = localStorage.getItem('liste');
    const loeschauswahl2 = localStorage.getItem('loeschliste');
    const zuloeschen2 = ',' + loeschauswahl2;
    const neueliste2 = angemeldet2.replace(zuloeschen2, '');
    localStorage.setItem('liste', neueliste2);

    const angemeldet3 = localStorage.getItem('liste');
    const loeschauswahl3 = localStorage.getItem('loeschliste');
    const zuloeschen3 = ',\n' + loeschauswahl3;
    const neueliste3 = angemeldet3.replace(zuloeschen3, '');
    localStorage.setItem('liste', neueliste3);

    const angemeldet4 = localStorage.getItem('liste');
    const loeschauswahl4 = localStorage.getItem('loeschliste');
    const zuloeschen4 = loeschauswahl4;
    const neueliste4 = angemeldet4.replace(zuloeschen4, '');
    localStorage.setItem('liste', neueliste4);

  }

  getAnmeldungen() {
    return [
      JSON.parse(localStorage.getItem('liste'))
    ];

  }

}
