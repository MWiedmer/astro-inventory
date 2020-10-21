import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { AstronomyPicture } from './astronomyPicture';

@Injectable({
  providedIn: 'root'
})
export class NasaserviceService {
	configUrl = 'https://api.nasa.gov/planetary/apod';
	apiKey = '2aJhkODFobvf5xsCRyyP0rdUZFY0WVd4QY6Kw6Yx';
	

  constructor(private http: HttpClient) { }

getPicture() {
	console.log('loading Astronomy Pic of the Day');
	
	const params = new HttpParams()
  		.set('api_key', this.apiKey);
    	
    return this.http.get<AstronomyPicture>(this.configUrl, {params})
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
