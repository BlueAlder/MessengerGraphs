import {Component, Input, OnInit} from '@angular/core';
import {MessageRate, MessagesApiService, ThreadName} from '../services/messages-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-message-rate',
  templateUrl: './message-rate.component.html',
  styleUrls: ['./message-rate.component.css']
})
export class MessageRateComponent implements OnInit {
  _groupName: string;

  @Input()
  set groupName(groupName: string) {
    this._groupName = groupName;
    this.updateGraph();
  }


  constructor(private messageApiService: MessagesApiService) {
  }
  groupList: ThreadName[];

  rate = 'monthly';

  chartOptions = {
    title: `Messages Per week for ${this._groupName}`,
    type: 'LineChart',
    columnNames: ['Week', 'Messages'],
    data: [],
    options: {
      curveType: 'function',
      legend: {position: 'bottom'},
      animation: {
        startup: true,
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
    this.chartOptions.title = 'Messages per date for ' + this._groupName;

    switch (this.rate) {
      case 'weekly': {
        this.messageApiService.getWeeklyCount(this._groupName)
          .subscribe(res => this.formatGraphData(res));
        break;
      }
      case 'monthly': {
        this.messageApiService.getMonthlyCount(this._groupName)
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
