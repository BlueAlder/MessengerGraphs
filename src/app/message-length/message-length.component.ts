import {Component, Input, OnInit} from '@angular/core';
import {MessagesApiService} from '../services/messages-api.service';

@Component({
  selector: 'app-message-length',
  templateUrl: './message-length.component.html',
  styleUrls: ['./message-length.component.css']
})
export class MessageLengthComponent implements OnInit {
  _groupName: string;

  @Input()
  set groupName(groupName: string) {
    this._groupName = groupName;
    this.updateGraph();
  }

  chartOptions = {
    title: `Average message length for ${this._groupName}`,
    type: 'ColumnChart',
    columnNames: ['Person', 'Average Message Length'],
    data: [],
    options: {
      legend: {position: 'right'},
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      },
    }
  };
  constructor(private messagesApiService: MessagesApiService) { }

  ngOnInit() {
    this.updateGraph();
  }

  updateGraph() {
    this.chartOptions.title = `Average message length for  ${this._groupName}`;
    this.messagesApiService.getAverageMessageLength(this._groupName)
      .subscribe(res => {
        const tempData = [];
        res.forEach(personAvg => {
          tempData.push([personAvg.name, parseFloat(personAvg.average_message_length)]);
        });
        this.chartOptions.data = tempData;
        console.log(this.chartOptions.data);
      });
  }


}
