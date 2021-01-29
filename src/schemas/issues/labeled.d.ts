/* tslint:disable */
import {
  App,
  AuthorAssociation,
  InstallationLite,
  Label,
  Milestone,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IssuesLabeledEvent {
  action: 'labeled';
  issue: {
    /**
     * URL for the issue
     */
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    /**
     * Title of the issue
     */
    title: string;
    user: User;
    labels?: Label[];
    /**
     * State of the issue; either 'open' or 'closed'
     */
    state?: 'open' | 'closed';
    locked?: boolean;
    assignee?: User | null;
    assignees: User[];
    milestone: Milestone | null;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    author_association: AuthorAssociation;
    active_lock_reason: 'resolved' | 'off-topic' | 'too heated' | 'spam' | null;
    performed_via_github_app?: App | null;
    pull_request?: {
      url?: string;
      html_url?: string;
      diff_url?: string;
      patch_url?: string;
    };
    /**
     * Contents of the issue
     */
    body: string;
  };
  label?: Label;
  assignee?: User | null;
  assignees?: User[];
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
