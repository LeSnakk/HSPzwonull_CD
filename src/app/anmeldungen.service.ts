import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnmeldungenService {

  public tempKursName;
  public tempKursID;
  public tempKursStart;
  public tempKursEnde;
  public tempKursOrt;
  public temp1 = [];
  public temp2;


  constructor() { }


  setAnmeldungen() {
    this.temp1.push({Name: this.tempKursName, ID: this.tempKursID, Start: this.tempKursStart, Ende: this.tempKursEnde, Ort: this.tempKursOrt});
    console.log (this.temp1);
    localStorage.setItem('liste', JSON.stringify(this.temp1));
  }


  getAnmeldungen() {
    console.log('anmeldungenservice' +  this.tempKursName);
    return [
      JSON.parse(localStorage.getItem('liste'))
    ];

  }

}
