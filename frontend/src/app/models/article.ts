import {Comment} from './comment';

export class Article {
  id: string;
  title: string;
  text: string;
  // tslint:disable-next-line:variable-name
  pub_date: string;
  comments: Comment[];
}
