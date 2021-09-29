import { Component, OnInit, Input } from '@angular/core';
import { IPInfo } from '../app.component';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent implements OnInit {
  columns: number;
  rowHeight: string;
  @Input() ipInfo: IPInfo;

  constructor() {
    this.columns = 0;
    this.rowHeight = "";
    this.ipInfo = new IPInfo();
  }

  ngOnInit(): void {
    this.columns = (window.innerWidth <= 768) ? 1 : 4;
    this.rowHeight = (window.innerWidth <= 768) ? "75px" : "150px";
  }

  onResize(event: any) {
    this.columns = (event.target.innerWidth <= 768) ? 1 : 4;
    this.rowHeight = (window.innerWidth <= 768) ? "75px" : "150px";
  }
}
