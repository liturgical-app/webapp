import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent {

  protected date: Date = new Date();

  /** Select a date for liturgical information */
  selectDate(event: any) {
    this.date = event.value;
  }

}
