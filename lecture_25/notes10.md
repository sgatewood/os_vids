# Privileged I/O flow
1. Guest OS tries to access device
    - Not allowed: Guest OS in user mode
2. Protection fault triggered
3. Handler in hypervisor
    - "Oh you were trying to get keyboard input"
    - talk to device for you
    - Update guest OS w/ any results
    - Switch back
