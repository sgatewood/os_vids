# Kernel/user mode switches
1. Starting with A, switch to kernel
2. switch to user mode B
3. Interrupt from device
4. Switch back to B
5. Switch to kernel
6. Switch to A
7. Switch to kernel for read
8. Switch back to A

Note: Second read() just gets data from top half (doesn't need to contact device)

# Context switches
1. Switch to B
2. Switch back to A
