import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubIssue } from './models/github-issue.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubLabel } from './models/github-label.model';

const BASE_URL = 'https://api.github.com/repos/angular/angular';

@Injectable({
  providedIn: 'root'
})
export class GithubIssuesService {

  total: number = 0;

  constructor(
    private http: HttpClient,
  ) { }

  getOpenIssues(searchText: string, page: number = 1, limit: number = 10) {
    return this.http.get<any[]>(`${BASE_URL}/issues?state=open&?per_page=${limit}&page=${page}`)
      .pipe(map((res: any[]) => this.mapResult(res, page, limit)));
  }

  getIssues(page: number = 1, limit: number = 10, labels: string[] = []): Observable<GithubIssue[]> {
    let URL = `${BASE_URL}/issues?per_page=${limit}&page=${page}`;
    if (!!labels.length) {
      URL += `&labels=${labels.join(',')}`;
    }
    return this.http.get<any[]>(URL)
    .pipe(map((res: any[]) => this.mapResult(res, page, limit)));
  }

  getLabels() {
    return this.http.get<any[]>(`${BASE_URL}/labels`);
  }

  private mapResult(res: any, page: number, limit: number): GithubIssue[] {
    const result: GithubIssue[] = [];
    res.forEach((e: any, i: number) => {
      if (page === 1 && i === 0) {
        this.total = Math.ceil(e.number / limit);
      }

      result.push({
        html_url: e.html_url,
        id: e.id,
        title: e.title,
        user: e.user,
        number: e.number,
        labels: e.labels,
        state: e.state,
        locked: e.locked,
        comments: e.comments,
        created_at: e.created_at,
        updated_at: e.updated_at,
        closed_at: e.closed_at,
        author_association: e.author_association,
        body: e.body,
      });
    });

    return result;
  }
}
