/* tslint:disable */
import { Installation, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MilestoneEditedEvent {
  action: 'edited';
  changes: {
    description?: {
      from: string;
    };
    due_on?: {
      from: string;
    };
    title?: {
      from: string;
    };
  };
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
    closed_at: string | null;
  };
  repository: Repository;
  sender: User;
  installation?: Installation;
  organization?: Organization;
}
