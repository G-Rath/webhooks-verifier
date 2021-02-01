/* tslint:disable */
import {
  InstallationLite,
  Issue,
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

export interface IssuesUnlockedEvent {
  action: 'unlocked';
  issue: Issue & {
    locked: false;
    active_lock_reason: null;
  };
  label?: Label;
  assignee?: User | null;
  assignees?: User[];
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
