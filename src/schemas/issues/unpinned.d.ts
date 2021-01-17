/* tslint:disable */
import { Installation, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IssuesUnpinnedEvent {
  action: 'unpinned';
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
    labels?: {
      id: number;
      node_id: string;
      url: string;
      name: string;
      color: string;
      default: boolean;
    }[];
    state?: 'open' | 'closed';
    locked?: boolean;
    assignee?: User | null;
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
    } | null;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    author_association:
      | 'COLLABORATOR'
      | 'CONTRIBUTOR'
      | 'FIRST_TIMER'
      | 'FIRST_TIME_CONTRIBUTOR'
      | 'MANNEQUIN'
      | 'MEMBER'
      | 'NONE'
      | 'OWNER';
    active_lock_reason: 'resolved' | 'off-topic' | 'too heated' | 'spam' | null;
    performed_via_github_app?: null;
    pull_request?: {
      url?: string;
      html_url?: string;
      diff_url?: string;
      patch_url?: string;
    };
    body: string;
  };
  label?: {
    id?: number;
    node_id?: string;
    url?: string;
    name?: string;
    color?: string;
    default?: boolean;
  };
  assignee?: User | null;
  assignees?: User[];
  repository: Repository;
  sender: User;
  installation?: Installation;
  organization?: Organization;
}
