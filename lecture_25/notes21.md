# nit: memory-mapped I/O
- If physical addr is for fake I/O device
    - Make shadow PTE invalid
    - We want page fault for these to emulate access to the device
