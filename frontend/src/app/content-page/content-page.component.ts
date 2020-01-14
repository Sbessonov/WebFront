import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  article: Article;
  url: string;
  id: string;
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:use-lifecycle-interface
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/User/4/').subscribe((data: Article) => this.article = data);
  }

}
