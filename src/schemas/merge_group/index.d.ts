export * from './checks_requested';
export * from './destroyed';

import { MergeGroupChecksRequestedEvent } from './checks_requested';
import { MergeGroupDestroyedEvent } from './destroyed';

export type MergeGroupEvent =
  | MergeGroupChecksRequestedEvent
  | MergeGroupDestroyedEvent;
