import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

export class IPInfo {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
  latitude: number;
  longitude: number;

  constructor() {
    this.ipAddress = "";
    this.location = "";
    this.timezone = "";
    this.isp = "";
    this.latitude = 0;
    this.longitude = 0;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ip-address-tracker';
  map: any;
  marker: any;
  ipInfo: IPInfo = new IPInfo();

  ngAfterViewInit(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  onSearch(event: IPInfo) {
    this.ipInfo = event;
    let icon = {
      icon: L.icon({
        iconSize: [ 46, 56 ],
        iconAnchor: [ 23, 56 ],
        iconUrl: 'assets/icon-location.svg'
       })
    };
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
    this.marker = L.marker([this.ipInfo.latitude, this.ipInfo.longitude], icon);
    this.marker.addTo(this.map);
    this.map.panTo(new L.LatLng(this.ipInfo.latitude, this.ipInfo.longitude));
  }
}
