import {Component, OnInit} from '@angular/core';
import {AnmeldungenService} from './anmeldungen.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'HSPzwonull';
  public arr = [];

  constructor(private titleService: Title) {
    this.titleService.setTitle('HSPzwonull_CD – Der Sportkursbrowser');
  }

  ngOnInit() {
    if (localStorage.getItem('liste') === null) {
      localStorage.setItem('liste', JSON.stringify(this.arr));
    }

  }
}
