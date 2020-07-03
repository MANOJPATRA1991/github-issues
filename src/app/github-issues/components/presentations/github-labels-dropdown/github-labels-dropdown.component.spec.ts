import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubLabelsDropdownComponent } from './github-labels-dropdown.component';

describe('GithubLabelsDropdownComponent', () => {
  let component: GithubLabelsDropdownComponent;
  let fixture: ComponentFixture<GithubLabelsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubLabelsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubLabelsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
