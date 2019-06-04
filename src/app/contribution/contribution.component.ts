import {Component, Input, OnInit} from '@angular/core';
import {MessagesApiService, ThreadName} from '../services/messages-api.service';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {

  _groupName: string;

  @Input()
  set groupName(groupName: string) {
    this._groupName = groupName;
    this.updateGraph();
  }



  groupList: ThreadName[];

  chartOptions = {
    title: `Contribution for thread ${this._groupName}`,
    type: 'PieChart',
    columnNames: ['Person', 'Contribution'],
    data: [],
    options: {
      legend: {position: 'right'},
      animation: {
        duration: 1000,
        easing: 'out',
      },
    }
  };

  constructor(private messageApiService: MessagesApiService) { }

  ngOnInit() {
    this.messageApiService.getThreads()
      .subscribe(res => this.groupList = res);

    this.updateGraph();


  }

  updateGraph() {
    this.chartOptions.title = `Contribution for thread ${this._groupName}`;
    this.messageApiService.getContribution(this._groupName)
      .subscribe(res => {
        const newData = [];
        res.forEach(person => {

          newData.push([person.name, parseInt(person.message_count, 10)]);
        });

        this.chartOptions.data = newData;
      });
  }

}
