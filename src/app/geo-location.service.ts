import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { geoLocation } from './models/geo-location'

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  constructor(private http: HttpClient) { }

  getGeoLoc() {
    return this.http.get<geoLocation>('https://ipinfo.io/json');
  }
}
