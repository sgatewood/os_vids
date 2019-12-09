# Page tables and kernel mode
- remember: Can mark pages as kernel-only
- Hypervisor needs to make this work
- If guest OS in **pretend kernel mode**
    - Sjhadow PTE: marked as user-mode accessible (really in user mode)
- If guest OS in **pretend user mode**
    - Shadow PTE: marked inaccessible

# One solution: Two shadow page tables
- One for pretend user mode
- One for pretend kernel mode
- Switch between them on exceptions etc
- Higher cost of emulation (switching page tables every time)

# Alternate solution: clear PT on kernel/user switch
- Also not great for overhead
