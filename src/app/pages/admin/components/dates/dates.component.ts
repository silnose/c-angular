import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-dates',
  template: `<h1>{{ date }}</h1>`,
  styleUrls: ['./dates.component.scss'],
})
export class DatesComponent implements OnInit {
  date: string = '';

  constructor() {}

  ngOnInit() {
    this.date = moment().add(20, 'days').format('YYYY/MMMM/DD');
  }
}
