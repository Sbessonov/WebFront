import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  models: Article[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://127.0.0.1:8000/User/').subscribe((data: Article[]) => this.models = data['models']);
  }

}
