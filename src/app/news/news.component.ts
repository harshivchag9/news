import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NewsServiceService } from '../Services/news-service.service';
import { SharedService } from '../Services/shared.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  pageUrl!: string;

  constructor(private modalService: BsModalService, private shared: SharedService, private news: NewsServiceService) { }
  @Input() category: any;
  @Input() country: any;
  modalRef!: BsModalRef;
  data!: any;
  p: number = 1;
  show = true;
  getTemplate!: TemplateRef<any>;

  ngOnInit(): void {

    this.news.getNewsByCat(this.shared.country, this.category).subscribe(data => {
      this.data = data.articles
      this.show = false
    });

  }
  ngOnChanges(): void {
    this.show = true
    this.news.getNewsByCat(this.country, this.category).subscribe(data => {
      this.data = data.articles
      this.show = false
    },
      error => {
        this.show = false;
        alert("something went wrong please try again")

      },
      () => {
        this.show = false
      });
  }
  openModal(url: string, template: TemplateRef<any>) {
    {
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'gray modal-lg' })
      );
      this.pageUrl = url;
    }
  }

}
