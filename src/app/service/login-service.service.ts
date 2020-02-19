import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Observer} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  loginValidator(login: object): Observable<object> {
    return this.http.get(`this.baseUrl`);
  }
}
