import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService {

  constructor(private http: HttpClient) { }


  getWeeklyCount(threadName: string ) {
    return this.http.get<MessageRate[]>(`${environment.base_api_url}/messages/weekly/${threadName}`);
  }

  getMonthlyCount(threadName: string) {
    return this.http.get<MessageRate[]>(`${environment.base_api_url}/messages/monthly/${threadName}`);
  }

  getThreads() {
    return this.http.get<ThreadName[]>(`${environment.base_api_url}/messages/threads`);
  }

  getContribution(threadName: string) {
    return this.http.get<Contribution[]>(`${environment.base_api_url}/messages/threads/contribution/${threadName}`);
  }

  getAllMessages(threadName: string) {
    return this.http.get<Body[]>(`${environment.base_api_url}/messages/body/${threadName}`);
  }

  getAverageMessageLength(threadName: string) {
    return this.http.get<AverageMessageLength[]>(`${environment.base_api_url}/messages/avg/length/${threadName}`);
  }
}
export interface ThreadName {
  name: string;
}

export interface MessageRate {
  date: string;
  count: string;
}

export interface Contribution {
  name: string;
  message_count: string;
}

export interface Body {
  body: string;
}

export interface AverageMessageLength {
  name: string;
  average_message_length: string;
}
