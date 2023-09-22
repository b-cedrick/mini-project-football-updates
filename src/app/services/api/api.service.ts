import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, throwError } from 'rxjs';
import { APP_CONFIG } from '../../core/config/environement.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = APP_CONFIG.API_URL;

  constructor(private readonly http: HttpClient) {}
  setupQueryParams(params: { [key: string]: any }): HttpParams {
    let queryParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null) {
        queryParams = queryParams.append(key, params[key]);
      }
    });
    return queryParams;
  }
  getList<T>(endpoint = '', params?: { [key: string]: any }): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const paramsOptions = params
      ? { params: this.setupQueryParams(params) }
      : {};

    return this.http.get<T>(url, paramsOptions).pipe(
      tap((res: any) => {
        this.handleSpecificError(res?.errors);
      }),
      catchError(this.handleError)
    );
  }

  getItem<T>(endpoint = ''): Observable<T> {
    const url = `${this.apiUrl} + ${endpoint}`;
    return this.http.get<T>(url).pipe(
      tap((res: any) => {
        this.handleSpecificError(res?.errors);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  public handleSpecificError(error: { [key: string]: any }) {
    if (this.isObjectNotEmpty(error)) {
      if (error['token']) {
        alert(error['token']);
      } else if (error['requests']) {
        if (
          error['requests'].includes(
            'You have reached the request limit for the day'
          )
        ) {
          alert(error['requests']);
        } else {
          alert(error);
        }
      } else {
        alert('An error occurred');
      }
    }
  }

  private isObjectNotEmpty(obj: any): boolean {
    if (Array.isArray(obj)) {
      return obj.length > 0;
    }
    return Object.keys(obj).length > 0;
  }
}
