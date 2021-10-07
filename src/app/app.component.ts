import { Component } from '@angular/core';
import { GeoLocationService } from './geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';
  country: any;

  constructor(private getGeoLoc: GeoLocationService) { }

  ngOnInit(): void {
    this.getGeoLoc.getGeoLoc().subscribe(data => {
      this.country = data.country;
    });
  }



}
