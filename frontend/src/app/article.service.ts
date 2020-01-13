export class ArticleService {

  data: string[] = [ 'Apple iPhone XR', 'Samsung Galaxy S9',  'Nokia 9'];
  // tslint:disable-next-line:variable-name
  article_id: number;
  // tslint:disable-next-line:variable-name
  author_name: string;
  text: string;

  getData(): string[] {

    return this.data;
  }
  addData(name: string) {

    this.data.push(name);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.text = 'lskdjflksdjflksdjflskdjflskdjflskdjflsjdflksjdflk';
  }
}
