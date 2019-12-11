# Inode data block addresses
- Inode stores an array of length `NDIRECT + 1`
    - Say NDIRECT is 12
    - indexes 0-11 are pointers to data blocks
        - Actually just ~0-based indexes of the disk
            - Not really 0 cuz of header block
    - index 12 points to an **indirect block**
        - Same size as the other data blocks
        - Filled with another array of **direct** pointers
            - How many?
            - `(Block Size) / (Pointer Size)`
                - xv6:
                    - 512-byte blocks
                    - 2-byte ptrs
                    - stores 256 2-byte ptrs

# So how much data?
- 12 direct blocks, 512 bytes each
    - 6144 bytes
- 1 indirect block --> 256 ptrs to 512-byte blocks
    - 131,072 bytes
