import {Component, Input, OnInit} from '@angular/core';
import {MessagesApiService} from '../services/messages-api.service';

@Component({
  selector: 'app-wordtree',
  templateUrl: './wordtree.component.html',
  styleUrls: ['./wordtree.component.css']
})
export class WordtreeComponent implements OnInit {
  _groupName: string;

  @Input()
  set groupName(groupName: string) {
    this._groupName = groupName;
    this.updateGraph();
  }

  chartOptions = {
    title: `Word tree for ${this._groupName}`,
    type: 'WordTree',
    columnNames: ['Messages'],
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

  constructor(private messagesApiService: MessagesApiService) { }

  ngOnInit() {
    this.updateGraph();

  }

  updateGraph() {
    this.messagesApiService.getAllMessages(this._groupName)
      .subscribe(res => {
        const tempData = [];
        res.forEach(message => {
          tempData.push(Object.values(message));
        });
        this.chartOptions.data = tempData;
        console.log(this.chartOptions.data);
      });
  }

}
