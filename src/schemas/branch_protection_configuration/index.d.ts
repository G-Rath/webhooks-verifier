export * from './disabled';
export * from './enabled';

import { BranchProtectionConfigurationDisabledEvent } from './disabled';
import { BranchProtectionConfigurationEnabledEvent } from './enabled';

export type BranchProtectionConfigurationEvent =
  | BranchProtectionConfigurationDisabledEvent
  | BranchProtectionConfigurationEnabledEvent;
