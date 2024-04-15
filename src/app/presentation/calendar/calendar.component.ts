import { Component } from '@angular/core';
import { CalendarService } from "../../core/service/calendar.service";
import {LiturgicalDate} from "../../core/model/liturgical-date";

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent {

  protected date: LiturgicalDate = new LiturgicalDate();

  constructor(private service: CalendarService) {}

  /** Select a date for liturgical information */
  async selectDate(event: any) {
    this.date = await this.service.getInformation(event.value);
  }

}
