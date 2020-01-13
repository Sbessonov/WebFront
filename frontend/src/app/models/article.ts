import {Comment} from './comment';

export class Article {
  title: string;
  text: string;
  // tslint:disable-next-line:variable-name
  pub_date: string;
  comments: Comment[];
}
