import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ip } from '../models/ip.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://ipapi.co/8.8.8.8/json/';

  constructor(
    private http: HttpClient,
  ) { }

  getIpInfo(): Observable<Ip> {
    return this.http.get<Ip>(this.apiUrl);
  }
}
