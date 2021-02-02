/* tslint:disable */
import {
  InstallationLite,
  Organization,
  Repository,
  User,
  Workflow,
  WorkflowRun
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WorkflowRunCompletedEvent {
  action: 'completed';
  organization?: Organization;
  repository: Repository;
  sender: User;
  workflow: Workflow;
  workflow_run: WorkflowRun;
  installation?: InstallationLite;
}
