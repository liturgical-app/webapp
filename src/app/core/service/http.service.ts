import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  get(baseUrl: string, path: string, params?: any, pathVariables?: any): Observable<any> {
    const url = baseUrl + path;
    const headers = new HttpHeaders();

    return this.http
      .get(url + "/" + pathVariables, { headers: headers }) // TODO :: complete...
      .pipe(catchError(HttpService.handleError));
  }

  private static handleError(error: HttpErrorResponse) { // FixMe -> util...
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
