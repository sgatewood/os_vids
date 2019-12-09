# Creating the shadow page table
- Simple
- 2 page table lookups:
    - guest PT lookup
    - hypervisor ~PT lookup
- Combine the two

# When do we update the shadow page table?
- Needs to be up to date
- What do you have to do when you update the page table?
    - Flush the TLB (Translation Lookaside Buffer)
        - A privileged instruction!
    - Processor actually uses TLB to do address translation w/ normal PT's
        - Same problem
            - Sythesized from a page table
            - Gets out of date
            - Needs to be told when to update
        - So can use same strategy
            - Manage the Shadow PT the same way the hardware manages the TLB
            - Shadow page table is basically a "virtual TLB" (stored as a PT instead of a cache)
        - **Usual strategy**
            - Want addr translated
            - actually go through TLB
            - Fetch addr from PT if not in TLB (Fetch on demand)
                - Shadow PT: fetch on page fault
            - When PT is modified
                - OS invalidates TLB entry (or flush them all)
                - This is the privileged instruction we'll take advantage of
        - **Our strategyk**
            - Guest OS edits guest PT
                - triggers instruction to flush TLB
                - Hypervisor clears part of shadow page table (fill in later if page fault)
            - Guest page faults
                - Hypervisor automatically detches on demand if necessary (like how HW does this automatically)
                - Hypervisor does conversion from 2 PTs
- More on shadow page table
    - Caches commonly used PTEs in translated form