# Three page tables
1. **Guest page table**
    - Hypervisor records where it is, etc
        - Privileged instruction sets base ptr
    - Translates virtual to physical
2. **Hypervisor page table?**
    - Translates physical to machine
    - Might not really be a page table
    - We do need to know this mapping thok
    - Need to have a mapping
        - Where would you store hypervisor?
        - What if you wanna run multiple VMs?

# But guest OS needs translation from virtual to machine directly
3. **Shadow page table**
    - Virtual to machine translation
    - "Shadow" of guest page table
    - Hypervisor constructs this from guest page table and its own page table

- Guest OS only knows about guest page table
- Hardware only knows about shadow page table
