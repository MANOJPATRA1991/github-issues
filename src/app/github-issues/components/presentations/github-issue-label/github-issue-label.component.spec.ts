import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubIssueLabelComponent } from './github-issue-label.component';

describe('GithubIssueLabelComponent', () => {
  let component: GithubIssueLabelComponent;
  let fixture: ComponentFixture<GithubIssueLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubIssueLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIssueLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
