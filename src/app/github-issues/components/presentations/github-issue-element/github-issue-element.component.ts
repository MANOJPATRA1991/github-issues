import { Component, OnInit, Input } from '@angular/core';
import { GithubIssue } from 'src/app/models/github-issue.model';

@Component({
  selector: 'app-github-issue-element',
  templateUrl: './github-issue-element.component.html',
  styleUrls: ['./github-issue-element.component.scss']
})
export class GithubIssueElementComponent implements OnInit {
  @Input() issue: GithubIssue;

  constructor() { }

  ngOnInit(): void {}

}
