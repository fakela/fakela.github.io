# Budget Updates Can Delay Tactic Delivery

![writing-sample](https://img.shields.io/badge/status-writing%20sample-brightgreen)

Asynchronous budget updates can delay tactic delivery from 10 minutes to an hour. However, you can force a budget update if you change and save any setting for a campaign or tactic.

## Asynchronous budget and bidder update cycles

Budget allocators and bidders update budget information at different times.

- Budget allocators check for budget at 10-minute intervals.

- The bidders check Watson for budget at 1-hour intervals.

However, ad delivery depends on where the allocators and bidders are in their respective update cycles. These separate update cycles can delay ad delivery from 10 minutes to an hour. For example, if the bidders check for a budget amount:

- _Before_ the budget allocator, the tactics may not deliver ads. In this case, the budget allocator might not have had enough time to update and distribute budget before the bidder update cycle runs.

- _After_ the budget allocator, the tactics may deliver ads. In this case, the budget allocator might have had enough time to update and distribute budget before the bidder update cycle runs.

For details about budget updates work, see [Understanding Budget Distribution and Update Cycles](update-cycle.md).

