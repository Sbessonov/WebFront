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
}
