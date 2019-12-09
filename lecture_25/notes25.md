# problem with filling on demand
- Many OSes invalidate **entire** TLB on context switch
    - Especially without tagged TLBs
- So, rebuild shadow PT on every OS context switch
    - Often unacceptably slow
    - Want to cache shadow page tables
    - problem: OS won't tell you when it's writing

# Solution: Shadow page table for multiple processes
- Actually 2 for each one (kernel and user)
- Problem: What if guest OS modifies another process' page table (e.g. fork, copy on write, evicting pages)
    - Guest OS thinks TLB only stores current process
        - So won't tell the hypervisor of these changes
- Solution: Trap and emulate
    - Track what physical pages are part of PTs the guest OS knows about
    - Mark them as read-only in shadow PTs
    - When guest OS tries to modify, triggers protection fault
    - Sounds really expensive, but cheaper than updating shadow PT every time
    - Real VM monitors do this
