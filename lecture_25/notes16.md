# This often doesn't actually work
- Works on some architectures
    - Relies on all special instrs triggering fault
    - Not all in x86
        - Some behave differently in User and kernel mode, but not just fault and no fault
    - Why original VMWare used to compile guest OS' machine code to other machine code
- Modern x86 added some ISA extensions that solve this problem
