import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageRate, MessagesApiService, ThreadName} from './messages-api.service';
import {GoogleChartComponent} from 'angular-google-charts';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('chart')
  chart: GoogleChartComponent;

  constructor(private messageApiService: MessagesApiService) {
  }
  groupList: ThreadName[];

  rate = 'monthly';

  groupName = 'family';
  chartOptions = {
    title: `Messages Per week for ${this.groupName}`,
    type: 'LineChart',
    columnNames: ['Week', 'Messages'],
    data: [],
    options: {
      curveType: 'function',
      legend: {position: 'bottom'},
      animation: {
        duration: 1000,
        easing: 'out',
      },
    }
  };

  ngOnInit(): void {

    this.messageApiService.getThreads()
      .subscribe(res => this.groupList = res);
    this.updateGraph();
  }

  updateGraph() {
    // this.chartOptions.data = [['23-03', 123], ['23-03', 123], ['23-03', 123]];
    this.chartOptions.title = 'Messages per date for ' + this.groupName;

    switch (this.rate) {
      case 'weekly': {
        this.messageApiService.getWeeklyCount(this.groupName)
          .subscribe(res => this.formatGraphData(res));
        break;
      }
      case 'monthly': {
        this.messageApiService.getMonthlyCount(this.groupName)
          .subscribe(res => this.formatGraphData(res));
        break;
      }
    }

  }

  formatGraphData(graphData: MessageRate[]) {
    const newData = [];
    console.log(graphData);
    graphData.forEach(rateDate => {
      newData.push([moment(rateDate.date).format('DD-MM-YY'), parseInt(rateDate.count, 10)]);
    });
    this.chartOptions.data = newData;
  }
}
