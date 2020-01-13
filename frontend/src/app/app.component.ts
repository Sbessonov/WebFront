import { Component } from '@angular/core';
import {ArticleService} from './article.service';
import {Article} from './models/article';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})

export class AppComponent {

  article: Article;
  url: string;
  id: string;
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:use-lifecycle-interface
  find(id: string) {
    this.url = 'http://127.0.0.1:8000/User/';
    this.url += id;
    this.url += '/';
    this.http.get(this.url).subscribe((data: Article) => this.article = data);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/User/4/').subscribe((data: Article) => this.article = data);
  }
}
