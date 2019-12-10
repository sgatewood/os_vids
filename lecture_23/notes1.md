# Problem
- C sent Prepare, then worker failed
- C doesn't know if W got Prepare or not

# Three strategies
1. C resends Prepare after a timeout
2. C aborts
3. W logged that it agreed to commit, so sends Agree-to-commit when it's up again (not required, but could make you abort less often)
