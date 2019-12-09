# Keeping Track of stuff
- Hypervisor keeps track of regular process stuff
    - Some extras tho
        - Whether in User/kernel mode
        - Page table ptr of guest OS (HARD)
        - Exception table ptr
        - Whether interrupts are disabled
            - (whether we're pretending they are or not)
- Guest OS runs like a process, with extra state to keep track of
