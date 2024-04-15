import { Injectable } from '@angular/core';
import { LiturgicalDate } from "../model/liturgical-date";
import { lastValueFrom, map } from "rxjs";
import { HttpService } from "./http.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseUrl: string;
  private uri: any;

  constructor(private httpService: HttpService) {
    this.baseUrl = environment.services.calendar.baseUrl;
    this.uri = environment.services.calendar.uri;

  }

  /** Fetch liturgical calendar information for a given date */
  getInformation(date: Date): Promise<LiturgicalDate> {
    return lastValueFrom(
      this.httpService.get(this.baseUrl, this.uri.getInformation, null, 'today')
        .pipe(map((response: any) => {
            return LiturgicalDate.convert(response);
          })
        ));
  }

}
