# What if we're in pretend user mode?

**Read from keyboard**

- If in pretend **kernel** mode: Do the actual privileged instruction
- If in pretend **user** mode: Invoke **guest OS'** exception handler (after switching to fake kernel mode, etc)
    - How nested VMs work
    - (pass handling down the VM chain)
