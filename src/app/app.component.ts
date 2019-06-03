import {Component, OnInit} from '@angular/core';
import {MessagesApiService, ThreadName} from './messages-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private messageApiService: MessagesApiService) {
  }
  groupList: ThreadName[];

  groupName = 'family';
  chart = {
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
    this.chart.data = [];
    this.messageApiService.getWeeklyCount(this.groupName)
      .subscribe(res => {
        res.forEach(weekly => {
          this.chart.data.push([`${weekly.week.toString()}-${weekly.year.toString().slice(-2)}`, parseInt(weekly.count, 10)]);
        });
        // console.log(this.chart.data);
      });
  }
}
