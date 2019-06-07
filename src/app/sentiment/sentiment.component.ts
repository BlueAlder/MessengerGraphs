import { Component, OnInit } from '@angular/core';
import {LiveMessagesService, Sentiment} from '../services/live-messages.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {
  sentiments: Sentiment[];

  chartOptions = {
    title: `Sentiment Scores`,
    type: 'ColumnChart',
    columnNames: ['Person', 'Sentiment Score'],
    data: [],
    options: {
      legend: {position: 'right'},
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      },
      vAxis: {
        maxValue: 0.9,
        minValue: -0.9
      }
    }
  };

  constructor(private liveMessagesService: LiveMessagesService) { }



  ngOnInit() {
    this.liveMessagesService.getSentiments()
      .subscribe(res => {
        this.sentiments = res;
        this.updateGraph();
        console.log(this.sentiments);
      });
  }

  updateGraph() {
    const tempData = [];
    this.sentiments.forEach(sentiment => {
      tempData.push(Object.values(sentiment));
    })
    this.chartOptions.data = tempData;
  }
}
