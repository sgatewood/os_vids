# System calls
1. Program in Guest OS makes **system call**
2. Invokes handler in **hypervisor**
3. Hypervisor **forwards** system call to the guest OS' system call handler
    - Also mark fake kernel mode, change PC, etc.
    - Also have to update page table (more on this later)

# After system call
- **Return from exception** in guest OS' syscall handler
    - Privileged instruction --> **Protection fault** cuz pretend kernel mode isn't real kernel mode
    - hypervisor has to emulate the actual return to the user program
