import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPInfo } from '../app.component';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  url: string;
  content: string;
  @Output() searchEvent: EventEmitter<IPInfo>;
  error: boolean;
  regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

  constructor(private http: HttpClient) {
    this.url = "https://geo.ipify.org/api/v1?apiKey=at_zPuJjDIEVKBdp4BZfWlUaMjmf2pWQ";
    this.content = "";
    this.searchEvent = new EventEmitter();
    this.error = false;
  }

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.http.get(this.url, this.regexExp.test(this.content) ? { params: { ipAddress: this.content }} : { params: { domain: this.content }})
    .subscribe(
      (data: any) => {
        let ipInfo: IPInfo = new IPInfo();
        ipInfo.ipAddress = data.ip;
        ipInfo.location = data.location.region + ', ' + data.location.city;
        ipInfo.timezone = 'UTC ' + data.location.timezone;
        ipInfo.isp = data.isp;
        ipInfo.latitude = data.location.lat;
        ipInfo.longitude = data.location.lng;
        this.searchEvent.emit(ipInfo);
        this.error = false;
      },
      (error: any) => {
        this.error = true;
      }
    );
  }
}
