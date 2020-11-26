import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { RandomUser } from '../../../interfaces/random-user';

@Injectable({
  providedIn: 'root',
})
export class RandomUsersService {
  constructor(private http: HttpClient) {}

  /**
   * Get all
   * transformo la data para devolverla segun mi interfaz y no el response que devuelve el backend con demas informacion.
   */
  getRandomUsers(): Observable<RandomUser[]> {
    return this.http.get('https://randomuser.me/api/?results=2').pipe(
      retry(3),
      catchError(this.handleError),
      map((response: any) =>
        response.results.map((user: RandomUser) => {
          return {
            email: user.email,
            gender: user.gender,
            phone: user.phone,
          } as RandomUser;
        })
      )
    );
  }

  getFile() {
    return this.http.get('assets/files/test.txt', { responseType: 'text' });
  }

  private handleError(error: HttpErrorResponse) {
    let message;
    switch (error.status) {
      case 404:
        message = 'Not found';
        break;
      case 401:
        message = 'No Auth';
        break;
    }
    Sentry.captureException(error);
    return throwError(message);
  }
}
