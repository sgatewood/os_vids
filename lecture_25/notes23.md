# Guest PT switches
1. Switch to another program
2. Switch back to original program

# Shadow PT switches
1. read(): To kernel mode (assume it doesn't switch back yet)
2. switch(): progA to progB
3. switch(): Back to user mode
4. keyboard(): To kernel mode (assume it doesn't switch back yet)
5. switch(): progB to progA
6. switch(): Back to user mode


- 32-bit x86: Every time you change PT ptr or invalide TLB, you gotta flush the **whole** TLB
    - So, all this gets really expensive
