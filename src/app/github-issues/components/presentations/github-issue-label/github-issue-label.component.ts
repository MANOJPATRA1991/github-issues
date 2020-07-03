import { Component, OnInit, Input } from '@angular/core';
import { GithubLabel } from 'src/app/models/github-label.model';

@Component({
  selector: 'app-github-issue-label',
  templateUrl: './github-issue-label.component.html',
  styleUrls: ['./github-issue-label.component.scss']
})
export class GithubIssueLabelComponent implements OnInit {

  @Input() label: GithubLabel;

  constructor() { }

  ngOnInit(): void {
  }

}
