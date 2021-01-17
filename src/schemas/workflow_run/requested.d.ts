/* tslint:disable */
import { Installation, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WorkflowRunRequestedEvent {
  action: 'requested';
  organization?: Organization;
  repository: Repository;
  sender: User;
  workflow: {
    badge_url: string;
    created_at: string;
    html_url: string;
    id: number;
    name: string;
    node_id: string;
    path: string;
    state: string;
    updated_at: string;
    url: string;
  };
  workflow_run: {
    artifacts_url: string;
    cancel_url: string;
    check_suite_url: string;
    conclusion: string | null;
    created_at: string;
    event: string;
    head_branch: string;
    head_commit: {
      author: {
        email: string;
        name: string;
      };
      committer: {
        email: string;
        name: string;
      };
      id: string;
      message: string;
      timestamp: string;
      tree_id: string;
    };
    head_repository: {
      archive_url: string;
      assignees_url: string;
      blobs_url: string;
      branches_url: string;
      collaborators_url: string;
      comments_url: string;
      commits_url: string;
      compare_url: string;
      contents_url: string;
      contributors_url: string;
      deployments_url: string;
      description: string;
      downloads_url: string;
      events_url: string;
      fork: boolean;
      forks_url: string;
      full_name: string;
      git_commits_url: string;
      git_refs_url: string;
      git_tags_url: string;
      hooks_url: string;
      html_url: string;
      id: number;
      issue_comment_url: string;
      issue_events_url: string;
      issues_url: string;
      keys_url: string;
      labels_url: string;
      languages_url: string;
      merges_url: string;
      milestones_url: string;
      name: string;
      node_id: string;
      notifications_url: string;
      owner: User;
      private: boolean;
      pulls_url: string;
      releases_url: string;
      stargazers_url: string;
      statuses_url: string;
      subscribers_url: string;
      subscription_url: string;
      tags_url: string;
      teams_url: string;
      trees_url: string;
      url: string;
    };
    head_sha: string;
    html_url: string;
    id: number;
    jobs_url: string;
    logs_url: string;
    node_id: string;
    pull_requests: unknown[];
    repository: {
      archive_url: string;
      assignees_url: string;
      blobs_url: string;
      branches_url: string;
      collaborators_url: string;
      comments_url: string;
      commits_url: string;
      compare_url: string;
      contents_url: string;
      contributors_url: string;
      deployments_url: string;
      description: string;
      downloads_url: string;
      events_url: string;
      fork: boolean;
      forks_url: string;
      full_name: string;
      git_commits_url: string;
      git_refs_url: string;
      git_tags_url: string;
      hooks_url: string;
      html_url: string;
      id: number;
      issue_comment_url: string;
      issue_events_url: string;
      issues_url: string;
      keys_url: string;
      labels_url: string;
      languages_url: string;
      merges_url: string;
      milestones_url: string;
      name: string;
      node_id: string;
      notifications_url: string;
      owner: User;
      private: boolean;
      pulls_url: string;
      releases_url: string;
      stargazers_url: string;
      statuses_url: string;
      subscribers_url: string;
      subscription_url: string;
      tags_url: string;
      teams_url: string;
      trees_url: string;
      url: string;
    };
    rerun_url: string;
    run_number: number;
    status: string;
    updated_at: string;
    url: string;
    workflow_id: number;
    workflow_url: string;
  };
  installation?: Installation;
}
