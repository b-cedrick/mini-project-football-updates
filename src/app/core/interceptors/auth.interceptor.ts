import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../config/environement.config';

export function authInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  // Get API KEY from config.
  const apiKey = APP_CONFIG.API_KEY;
  // Clone the request and replace the original headers with
  // cloned headers, updated with the authorization.
  const authReq = request.clone({
    headers: request.headers.set('x-rapidapi-key', apiKey),
  });

  // send cloned request with header to the next handler.
  return next(authReq);
}
