import { Component, OnInit } from '@angular/core';
import {GraphType} from '../models/enums';
import {MessagesApiService, ThreadName} from '../services/messages-api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  GraphTypes = GraphType;
  graphType  = GraphType.MessageRate;

  threadName = 'Grace Cox';
  threadNames: ThreadName[];

  constructor(private messagesApiService: MessagesApiService) { }

  ngOnInit() {
    this.messagesApiService.getThreads()
      .subscribe(res => this.threadNames = res);
  }

}
