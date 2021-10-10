import { GeoLocationService } from './geo-location.service';
import { environment } from 'src/environments/environment';
import { Component, Input } from '@angular/core';
import { SharedService } from './Services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SharedService]
})
export class AppComponent {
  title = 'news';
  constructor(private getGeoLoc: GeoLocationService, private shared: SharedService) { }

  ngOnInit(): void {
    this.getGeoLoc.getGeoLoc().subscribe(data => {
      this.shared.country = data.country;
      setTimeout(() => {
      }, 2000);
    });



  }



}
