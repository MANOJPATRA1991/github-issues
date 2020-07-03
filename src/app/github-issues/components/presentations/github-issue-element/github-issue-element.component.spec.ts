import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubIssueElementComponent } from './github-issue-element.component';

describe('GithubIssueElementComponent', () => {
  let component: GithubIssueElementComponent;
  let fixture: ComponentFixture<GithubIssueElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubIssueElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIssueElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
