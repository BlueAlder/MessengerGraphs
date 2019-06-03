import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService {

  constructor(private http: HttpClient) { }

  getWeeklyCount(groupName: string ) {
    return this.http.get<WeeklyCount[]>(`${environment.base_api_url}/messages/weekly/${groupName}`);
  }

  getThreads() {
    return this.http.get<ThreadName[]>(`${environment.base_api_url}/messages/threads`);
  }
}
export interface ThreadName {
  name: string;
}

export interface WeeklyCount {
  year: number;
  week: number;
  count: string;
}
