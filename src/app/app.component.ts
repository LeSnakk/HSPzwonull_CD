import {Component, OnInit} from '@angular/core';
import {AnmeldungenService} from './anmeldungen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'HSPzwonull';

  constructor() {
  }

  ngOnInit() {
  }
}
