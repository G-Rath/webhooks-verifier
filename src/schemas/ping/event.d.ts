/* tslint:disable */
import { Organization, Repository, User } from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PingEvent {
  zen: string;
  hook_id: number;
  /**
   * The [webhook configuration](https://docs.github.com/en/rest/reference/repos#get-a-repository-webhook).
   */
  hook: {
    type: string;
    id: number;
    name: string;
    active: boolean;
    events: string[];
    config: {
      content_type: string;
      secret?: string;
      url: string;
      insecure_ssl: string;
    };
    updated_at: string;
    created_at: string;
    url: string;
    test_url?: string;
    ping_url: string;
    last_response?: {
      code: null;
      status: string;
      message: null;
    };
  };
  repository?: Repository;
  sender?: User;
  organization?: Organization;
}
