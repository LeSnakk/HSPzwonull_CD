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
    console.log (this.temp1);
    localStorage.setItem('liste', JSON.stringify(this.temp1));
  }

  removeAnmeldungen() {
    this.temp2 = ({Name: this.tempKursName, ID: this.tempKursID, Tag: this.tempKursTag, Start: this.tempKursStart, Ende: this.tempKursEnde, Ort: this.tempKursOrt});
    localStorage.setItem('loeschliste', JSON.stringify(this.temp2));

    const a = JSON.stringify(this.temp2);
    console.log('A' + this.temp2);
    console.log('B' + JSON.stringify(localStorage.getItem('liste')));

    const arr = localStorage.getItem('liste');
    console.log('vorher' + arr);
    const losch2 = localStorage.getItem('loeschliste');
    const losch = losch2 + ','
    console.log(losch);
    const index = arr.replace(losch, '');
    console.log('nachher' + index);
    localStorage.setItem('liste', index);

    const arr9 = localStorage.getItem('liste');
    console.log('vorher' + arr9);
    const losch8 = localStorage.getItem('loeschliste');
    const losch7 = ',' + losch8;
    console.log(losch7);
    const index4 = arr9.replace(losch7, '');
    console.log('nachher' + index4);
    localStorage.setItem('liste', index4);

    const arr3 = localStorage.getItem('liste');
    console.log('vorher' + arr3);
    const losch5 = localStorage.getItem('loeschliste');
    const losch4 = ',\n' + losch5;
    console.log(losch4);
    const index3 = arr3.replace(losch4, '');
    console.log('nachher' + index3);
    localStorage.setItem('liste', index3);

    const arr2 = localStorage.getItem('liste');
    const losch3 = localStorage.getItem('loeschliste');
    const losch1 = losch3;
    console.log(losch1);
    const index2 = arr2.replace(losch1, '');
    console.log('nachher' + index2);
    localStorage.setItem('liste', index2);

  }

  getAnmeldungen() {
    /*console.log('anmeldungenservice' +  this.tempKursName);*/
    return [
      JSON.parse(localStorage.getItem('liste'))
    ];

  }

}
