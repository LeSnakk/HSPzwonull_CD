import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnmeldungenService {

  public tempKursName;
  public temp1 = [];
  public temp2;


  constructor() { }


  setAnmeldungen() {
    localStorage.setItem('liste', JSON.stringify({Name: this.tempKursName}));
    this.temp1.push({Name: this.tempKursName});
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
