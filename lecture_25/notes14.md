# Applying this I/O to memory-mapped I/O
- Emulating writing to a control register
    - Have to emulate every memory-writing instruction to make devices work
    - (at least) 2 types of page faults for hypervisor:
        1. Guest OS trying to access device memory (**emulate the device**)
        2. Guest OS trying to access memory not in its page table (run **exception handler in guest OS**)
            - Trigger page fault in guest OS
    - **tl;dr**: Is it not mapped because it's a device, or because we don't have this mapping in the guest OS?
    - Virtual mem on top of this? Extra cases (next)
