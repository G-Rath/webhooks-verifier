/* tslint:disable */
import {
  BranchProtectionRule,
  InstallationLite,
  Organization,
  Repository,
  User
} from '../common';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Activity related to a branch protection rule. For more information, see "[About branch protection rules](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)."
 */
export interface BranchProtectionRuleEditedEvent {
  action: 'edited';
  rule: BranchProtectionRule;
  /**
   * If the action was `edited`, the changes to the rule.
   */
  changes?: {
    admin_enforced?: {
      from: boolean;
    };
    allow_deletions_enforcement_level?: {
      from: ('off' | 'non_admins' | 'everyone') | null;
    };
    allow_force_pushes_enforcement_level?: {
      from: 'off' | 'non_admins' | 'everyone';
    };
    authorized_actors_only?: {
      from: boolean;
    };
    authorized_actor_names?: {
      from: string[];
    };
    authorized_dismissal_actors_only?: {
      from: boolean | null;
    };
    dismiss_stale_reviews_on_push?: {
      from: boolean;
    };
    pull_request_reviews_enforcement_level?: {
      from: 'off' | 'non_admins' | 'everyone';
    };
    require_code_owner_review?: {
      from: boolean;
    };
    required_approving_review_count?: {
      from: number;
    };
    required_conversation_resolution_level?: {
      from: 'off' | 'required' | 'requested_and_required';
    };
    required_deployments_enforcement_level?: {
      from: 'off' | 'non_admins' | 'everyone';
    };
    required_status_checks?: {
      from: string[];
    };
    required_status_checks_enforcement_level?: {
      from: 'off' | 'non_admins' | 'everyone';
    };
    signature_requirement_enforcement_level?: {
      from: 'off' | 'non_admins' | 'everyone';
    };
    linear_history_requirement_enforcement_level?: {
      from: 'off' | 'non_admins' | 'everyone';
    };
  };
  repository: Repository;
  sender: User;
  installation?: InstallationLite;
  organization?: Organization;
}
