import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageRate, MessagesApiService, ThreadName} from './services/messages-api.service';
import {GoogleChartComponent} from 'angular-google-charts';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }


}
