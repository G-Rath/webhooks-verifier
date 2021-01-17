/* tslint:disable */
import { Installation, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ProjectEditedEvent {
  action: 'edited';
  changes: {
    name?: {
      from: string;
    };
    body?: {
      from: string;
    };
  };
  project: {
    owner_url: string;
    url: string;
    html_url: string;
    columns_url: string;
    id: number;
    node_id: string;
    name: string;
    body: string;
    number: number;
    state: string;
    creator: User;
    created_at: string;
    updated_at: string;
  };
  repository: Repository;
  sender: User;
  installation?: Installation;
  organization?: Organization;
}
