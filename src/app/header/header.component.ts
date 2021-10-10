import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsServiceService } from '../Services/news-service.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDate = new Date();
  data: any;
  @Input() country: any;
  selectedCountry: string = this.shared.country;
  countryDropDown = {
    "IN": "India",
    "US": "United States",
    "AU": "Australia",
    "UK": "United Kingdom"
  }
  constructor(public shared: SharedService, private news: NewsServiceService) { }
  ngOnInit(): void {

  }
  onChange() {
    this.shared.country = this.selectedCountry;
    this.news.getNewsByCat(this.shared.country, this.shared.category).subscribe(data => {
      this.data = data.articles
    });
  }


}
