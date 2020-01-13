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
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/User/2/').subscribe((data: Article) => this.article = data);
  }
}
