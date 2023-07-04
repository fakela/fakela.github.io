# Budget Distribution Among and Within Data Centers

![writing-sample](https://img.shields.io/badge/status-writing%20sample-brightgreen)

Our data centers receive campaign budgets in direct proportion to the bid requests matched by their bidders. Within a data center, hardware differences between servers affect how much budget each bidder receives.

## Match rates and budget distribution

Budget management is easy when you have only one data center. In this scenario, the bidders receive all the budget available to them. But we have several regional data centers, not just one. This design makes systems fault tolerant and responsive to bid requests, but also exposes the limitations of even budget distribution.

For example, with multiple data centers, even budget distribution is inefficient because one data center may receive more bid requests than the others. Also, even distribution strands budget in data centers that don’t get many (or any) bid requests.

To help solve the stranded budget problem, our systems allocate budgets to each data center in direct proportion to their match rate. The match rate measures how often the bidders in a data center can fulfill a bid request given the constraints set by each tactic. If a data center and its bidders match more bids, they receive a larger share of the total budget. This is a dynamic method of budget allocation that shifts resources between data centers and bidders in response to demand.

In our technology stack, the budget allocator calculates the match rate and Watson manages and distributes budgets to the bidders. For more information about how these systems work, see [Understanding Budget Distribution and Update Cycles](update-cycle.md).
