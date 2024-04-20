import { Injectable } from '@angular/core';
import { LiturgicalDate } from "../model/liturgical-date";
import { lastValueFrom, map } from "rxjs";
import { HttpService } from "./http.service";
import { environment } from "../../../environments/environment";

const BASE_URL = environment.services.calendar.baseUrl;
const URI = environment.services.calendar.uri;

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private httpService: HttpService) { }

  /** Fetch liturgical calendar information for a given date */
  getInformation(date: Date): Promise<LiturgicalDate> {
    const formatted = date.toISOString().split('T')[0];

    return lastValueFrom(
      this.httpService.get(BASE_URL, URI.getInformation, null, formatted)
        .pipe(map((response: any) => {
            return LiturgicalDate.convert(response);
          })
        ));
  }

}
