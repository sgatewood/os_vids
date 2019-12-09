# How do we make it look like it's on real HW?
- Run it normally until it stops (exceptions)
- Hypervisor simulates what processor would "normally" do
    - e.g. Screen system call: talks to screen on your behalf
    - e.g. fault to disable interrupts: Store that you disabled interrupts
    - e.g. System call: Run Guest OS' system call handler
