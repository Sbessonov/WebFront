import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  article: Article;
  id: number;
  private subscription: Subscription;
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.id = this.activateRoute.snapshot.params.id;
    this.http.get('http://127.0.0.1:8000/User/' + this.id.toString() + '/').subscribe((data: Article) => this.article = data);
  }

}
