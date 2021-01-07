/* tslint:disable */
import { Installation, Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RepositoryUnarchivedEvent {
  action: 'unarchived';
  changes?: {
    description?: {
      from?: string;
      [k: string]: unknown;
    };
    default_branch?: {
      from?: string;
      [k: string]: unknown;
    };
    owner?: {
      from?: {
        user?: User;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    homepage?: {
      from?: string;
      [k: string]: unknown;
    };
    additionalProperties?: false;
  };
  repository: Repository;
  sender: User;
  installation?: Installation | null;
  organization?: Organization | null;
}
