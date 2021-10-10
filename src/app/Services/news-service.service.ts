import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../models/News';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<News>(environment.NewsAPI_URL + "?country=" + environment.country + "&apiKey=" + environment.NewsAPI_KEY);
  }

  getNewsByCat(country: String, category: String) {
    return this.http.get<News>(environment.NewsAPI_URL + "?country=" + country + "&category=" + category + "&apiKey=" + environment.NewsAPI_KEY);
  }
}
