/* tslint:disable */
import { User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Membership {
  url: string;
  state: string;
  role: string;
  organization_url: string;
  user: User;
}
