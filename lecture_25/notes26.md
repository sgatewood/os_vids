# proactive (trap and emulate) over on-demand
- pro: works with guest OSes that make assumptions about TLB size
- pro: maintain shadow Pt for each guest process (avoids rebuilding on every context switch)
- pro: better fit with tagged TLBs
- con: more instructions spent doing copy-on-write
- con: What happens when PT memory recycled?
- con: Super complicated
