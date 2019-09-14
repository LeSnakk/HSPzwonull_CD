import { Component, OnInit } from '@angular/core';
import {AnmeldungenService} from '../../anmeldungen.service';


@Component({
  selector: 'app-anmeldungsliste',
  templateUrl: './anmeldungsliste.component.html',
  styleUrls: ['./anmeldungsliste.component.scss']
})

export class AnmeldungslisteComponent implements OnInit {

  public anmeldungen = [];
  console = console;


  constructor(private anmeldungenService: AnmeldungenService) { }

  ngOnInit() {

    this.anmeldungen = this.anmeldungenService.getAnmeldungen();
  }
  refresh(event, ID) {
    location.href = '/detail-kurs/' + ID;
  }

  clear() {
    localStorage.removeItem('liste');
    window.location.reload();
  }
}
