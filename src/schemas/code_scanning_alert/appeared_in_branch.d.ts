/* tslint:disable */
import { Installation, Organization, Repository } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CodeScanningAlertAppearedInBranchEvent {
  action: 'appeared_in_branch';
  alert: {
    number: number;
    created_at: string;
    url: string;
    html_url: string;
    instances: {
      ref: string;
      analysis_key: string;
      environment: string;
      state: string;
    }[];
    state: string;
    dismissed_by: null;
    dismissed_at: string | null;
    dismissed_reason: string | null;
    rule: {
      id: string;
      severity: string;
      description: string;
    };
    tool: {
      name: string;
      version: null;
    };
  };
  ref: string;
  commit_oid: string;
  repository: Repository;
  installation?: Installation;
  organization?: Organization;
}
