import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Text } from '../models/text';

@Injectable({
  providedIn: 'root'
})
export class BowService {
  private readonly apiEndpoint: string;

  constructor(private http: HttpClient) { 
    this.apiEndpoint = environment.apiEndpoint
  }

  private handleError(error: HttpErrorResponse): Observable<never>{
    console.log(error);
    return throwError(() => error);
  }

  postBow(text: Text): Observable<any>{
    return this.http.post(this.apiEndpoint, text)
      .pipe(
        catchError(this.handleError)
      )
  }
}
