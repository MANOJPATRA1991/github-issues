import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubIssuesComponent } from './components/containers/github-issues/github-issues.component';
import { GithubIssueElementComponent } from './components/presentations/github-issue-element/github-issue-element.component';
import { GithubIssueLabelComponent } from './components/presentations/github-issue-label/github-issue-label.component';
import { GithubLabelsDropdownComponent } from './components/presentations/github-labels-dropdown/github-labels-dropdown.component';



@NgModule({
  declarations: [GithubIssuesComponent, GithubIssueElementComponent, GithubIssueLabelComponent, GithubLabelsDropdownComponent],
  imports: [
    CommonModule
  ],
  exports: [GithubIssuesComponent]
})
export class GithubIssuesModule { }
