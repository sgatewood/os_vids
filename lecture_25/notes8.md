# Virtal Machine execution pieces
1. Making **IO and kernel-mode related instructions** work
    - **Trap and emulate**
    - Force instruction to cause fault
    - Make fault handler do what HW would do
    - might require reading machine code to emulate instruction
2. Making **exceptions/interrupts** work
    - "reflect" exceptions/interrupts into guest OS
3. Making **page tables** work
    - Whole thing
