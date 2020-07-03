import { Component, OnInit } from '@angular/core';
import { GithubIssuesService } from 'src/app/github-issues.service';
import { GithubIssue } from 'src/app/models/github-issue.model';
import { debounceTime, debounce } from 'rxjs/operators';
import { interval } from 'rxjs';
import { GithubLabel } from 'src/app/models/github-label.model';

@Component({
  selector: 'app-github-issues',
  templateUrl: './github-issues.component.html',
  styleUrls: ['./github-issues.component.scss']
})
export class GithubIssuesComponent implements OnInit {

  issues: GithubIssue[] = [];
  lastIndex: number = 1;
  currentIndex: number = 1;
  totalPagesToShow: any = new Array(3);
  searchInput: string = '';
  labels: GithubLabel[] = [];

  constructor(
    private githubIssuesService: GithubIssuesService,
  ) { }

  onLabelSelect(labels: string[]) {
    this.getGithubIssues(1, 10, labels);
    this.currentIndex = 1;
  }

  ngOnInit(): void {
    this.getGithubIssues(1);
    this.githubIssuesService.getLabels().subscribe(labels => this.labels = labels);
  }

  onPaginationClick(index: number) {
    this.getGithubIssues(index);
    this.currentIndex = index;
  }

  getGithubIssues(page: number, limit: number = 10, labels: string[] = []) {
    this.githubIssuesService.getIssues(page, limit, labels)
    .subscribe((issues: GithubIssue[]) => {
      this.lastIndex = this.githubIssuesService.total;
      this.issues = issues;
    });
  }

  getSearchResults(text: string) {
    this.searchInput += text;
    this.githubIssuesService.getOpenIssues(this.searchInput)
    .subscribe((issues: GithubIssue[]) => {
      this.currentIndex = 1;
      this.lastIndex = this.githubIssuesService.total;
      this.issues = issues;
    });
  }
}
