import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { News } from '../models/News';
import { NewsServiceService } from '../Services/news-service.service';
import { SharedService } from '../Services/shared.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  data!: any;
  currentDate = new Date();
  modalRef!: BsModalRef;
  selectedCountry: string = this.shared.country;
  category: any = this.shared.category;
  country: any = this.shared.country;
  countryDropDown = {
    "IN": "India",
    "US": "United States",
    "AU": "Australia"
  }
  constructor(private modalService: BsModalService, private getNewsService: NewsServiceService, private shared: SharedService) { }

  ngOnInit(): void {
    this.country = this.shared.country;
    this.getNewsService.getNews().subscribe(data => {
      this.data = data.articles;
    });
  }
  changeCat(cat: string) {
    this.shared.category = cat;
    this.category = cat;
  }
  onChange() {
    this.shared.country = this.selectedCountry;
    this.country = this.selectedCountry;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}



