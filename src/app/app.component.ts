import { GeoLocationService } from './geo-location.service';
import { environment } from 'src/environments/environment';
import { Component, Input } from '@angular/core';

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
