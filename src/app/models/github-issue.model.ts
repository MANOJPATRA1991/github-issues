import { GithubLabel } from './github-label.model';
import { GithubIssueUser } from './github-issue-user.model';

export interface GithubIssue {
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: GithubIssueUser;
  labels: GithubLabel[];
  state: 'open' | 'closed' | 'all';
  locked: boolean;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  body: string;
}
