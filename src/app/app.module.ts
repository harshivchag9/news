import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { SharedService } from './Services/shared.service';
import { NewsComponent } from './news/news.component';
import { GeoLocationService } from './geo-location.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsfeedComponent,
    DateAgoPipe,
    NewsComponent,
    SafeUrlPipe
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private getGeoLoc: GeoLocationService, private shared: SharedService) { }
  ngOnInit(): void {
    this.getGeoLoc.getGeoLoc().subscribe(data => {
      this.shared.country = data.country;
    });
  }
}
