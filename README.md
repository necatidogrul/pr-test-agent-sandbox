# pr-test-agent-sandbox

A deliberately tiny repository used to exercise the PR test agent end to end.
`src/parseAmount.js` is the only module of interest; pull requests here change its
behaviour so the agent has something real to reason about.

## Modules

- `src/parseAmount.js` — turns a user-typed amount into minor units.
- `src/splitBill.js` — divides a total into whole-kurus shares.
