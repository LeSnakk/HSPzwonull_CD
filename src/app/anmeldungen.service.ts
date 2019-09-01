import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnmeldungenService {

  public tempKursName;
  public tempKursID;
  public temp1 = [];
  public temp2;


  constructor() { }


  setAnmeldungen() {
    localStorage.setItem('liste', JSON.stringify({Name: this.tempKursName, ID: this.tempKursID}));
    this.temp1.push({Name: this.tempKursName, ID: this.tempKursID});
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
