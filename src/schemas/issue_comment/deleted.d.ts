/* tslint:disable */
import {
  AuthorAssociation,
  Installation,
  Label,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IssueCommentDeletedEvent {
  action: 'deleted';
  issue: {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: User;
    labels: Label[];
    state: 'open' | 'closed';
    locked: boolean;
    assignee: User | null;
    assignees: User[];
    milestone: {
      url: string;
      html_url: string;
      labels_url: string;
      id: number;
      node_id: string;
      number: number;
      title: string;
      description: string;
      creator: User;
      open_issues: number;
      closed_issues: number;
      state: string;
      created_at: string;
      updated_at: string;
      due_on: string;
      closed_at: string;
    };
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: null;
    author_association: AuthorAssociation;
    active_lock_reason: 'resolved' | 'off-topic' | 'too heated' | 'spam' | null;
    pull_request?: {
      url: string;
      html_url: string;
      diff_url: string;
      patch_url: string;
    };
    body: string;
    performed_via_github_app?: null;
  };
  comment: {
    url: string;
    html_url: string;
    issue_url: string;
    id: number;
    node_id: string;
    user: User;
    created_at: string;
    updated_at: string;
    author_association: AuthorAssociation;
    body: string;
  };
  repository: Repository;
  sender: User;
  installation?: Installation;
  organization?: Organization;
}
