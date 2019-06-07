import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContributionComponent } from './contribution/contribution.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MessageRateComponent } from './message-rate/message-rate.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { WordtreeComponent } from './wordtree/wordtree.component';
import { MessageLengthComponent } from './message-length/message-length.component';
import { SentimentComponent } from './sentiment/sentiment.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContributionComponent,
    SidenavComponent,
    MessageRateComponent,
    WordtreeComponent,
    MessageLengthComponent,
    SentimentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
