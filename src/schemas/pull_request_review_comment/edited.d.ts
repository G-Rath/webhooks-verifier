/* tslint:disable */
import {
  AuthorAssociation,
  InstallationLite,
  Label,
  Link,
  Milestone,
  Organization,
  Repository,
  Team,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PullRequestReviewCommentEditedEvent {
  action: 'edited';
  /**
   * The changes to the comment.
   */
  changes: {
    body?: {
      /**
       * The previous version of the body.
       */
      from: string;
    };
  };
  /**
   * The [comment](https://docs.github.com/en/rest/reference/pulls#comments) itself.
   */
  comment: {
    /**
     * URL for the pull request review comment
     */
    url: string;
    /**
     * The ID of the pull request review to which the comment belongs.
     */
    pull_request_review_id: number;
    /**
     * The ID of the pull request review comment.
     */
    id: number;
    /**
     * The node ID of the pull request review comment.
     */
    node_id: string;
    /**
     * The diff of the line that the comment refers to.
     */
    diff_hunk: string;
    /**
     * The relative path of the file to which the comment applies.
     */
    path: string;
    /**
     * The line index in the diff to which the comment applies.
     */
    position: number | null;
    /**
     * The index of the original line in the diff to which the comment applies.
     */
    original_position: number;
    /**
     * The SHA of the commit to which the comment applies.
     */
    commit_id: string;
    /**
     * The SHA of the original commit to which the comment applies.
     */
    original_commit_id: string;
    user: User;
    /**
     * The text of the comment.
     */
    body: string;
    created_at: string;
    updated_at: string;
    /**
     * HTML URL for the pull request review comment.
     */
    html_url: string;
    /**
     * URL for the pull request that the review comment belongs to.
     */
    pull_request_url: string;
    author_association: AuthorAssociation;
    _links: {
      self: Link;
      html: Link;
      pull_request: Link;
    };
    /**
     * The first line of the range for a multi-line comment.
     */
    start_line?: number | null;
    /**
     * The first line of the range for a multi-line comment.
     */
    original_start_line?: number | null;
    /**
     * The side of the first line of the range for a multi-line comment.
     */
    start_side?: 'LEFT' | 'RIGHT' | null;
    /**
     * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
     */
    line?: number;
    /**
     * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
     */
    original_line?: number;
    /**
     * The side of the first line of the range for a multi-line comment.
     */
    side?: 'LEFT' | 'RIGHT';
    /**
     * The comment ID to reply to.
     */
    in_reply_to_id?: number;
  };
  pull_request: {
    url: string;
    id: number;
    node_id: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    number: number;
    state: 'open' | 'closed';
    locked: boolean;
    title: string;
    user: User;
    body: string;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    merged_at: string | null;
    merge_commit_sha: string | null;
    assignee: User | null;
    assignees: User[];
    requested_reviewers: (User | Team)[];
    requested_teams: Team[];
    labels: Label[];
    milestone: Milestone | null;
    draft?: boolean;
    commits_url: string;
    review_comments_url: string;
    review_comment_url: string;
    comments_url: string;
    statuses_url: string;
    head: {
      label: string;
      ref: string;
      sha: string;
      user: User;
      repo: Repository;
    };
    base: {
      label: string;
      ref: string;
      sha: string;
      user: User;
      repo: Repository;
    };
    _links: {
      self: Link;
      html: Link;
      issue: Link;
      comments: Link;
      review_comments: Link;
      review_comment: Link;
      commits: Link;
      statuses: Link;
    };
    author_association: AuthorAssociation;
  };
  repository: Repository;
  installation?: InstallationLite;
  organization?: Organization;
  sender: User;
}
