/* tslint:disable */
import {
  InstallationLite,
  Organization,
  Repository,
  Team,
  User,
  WorkflowRun
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface DeploymentReviewApprovedEvent {
  action: 'approved';
  workflow_run: WorkflowRun;
  since: string;
  workflow_job_run?: {
    id: number;
    name: string;
    status: 'queued' | 'in_progress' | 'completed' | 'waiting';
    conclusion: 'success' | 'failure' | 'cancelled' | 'skipped' | null;
    html_url: string;
    created_at: string;
    updated_at: string;
    environment: string;
  };
  workflow_job_runs?: {
    id: number;
    name: string;
    status: 'queued' | 'in_progress' | 'completed' | 'waiting';
    conclusion: 'success' | 'failure' | 'cancelled' | 'skipped' | null;
    html_url: string;
    created_at: string;
    updated_at: string;
    environment: string;
  }[];
  reviewers?: (
    | {
        type: 'User';
        reviewer: User;
      }
    | {
        type: 'Team';
        reviewer: Team;
      }
  )[];
  approver?: User;
  comment?: string;
  repository: Repository;
  organization: Organization;
  sender: User;
  installation?: InstallationLite;
}
