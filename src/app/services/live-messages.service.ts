import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveMessagesService {

  constructor(private http: HttpClient) { }

  getSentiments() {
    return this.http.get<Sentiment[]>(`${environment.base_api_url}/live/sentiment`);
  }
}

export interface Sentiment {
  name: string;
  sentiment_score: number;
}
