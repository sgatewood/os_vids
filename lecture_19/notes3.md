# Other stats
- 256 ptrs per block

# 200 30KB files
- 200 inodes
    - need ptrs to 60 blocks
    - 1 inode + extra 512-byte block
    - 200 * (64 + 512)
    - **61 blocks per file**
    - **1 inode per file**
- 200 directory entries
    - 3200 bytes
    - Need 7 blocks
    - **1 inode**
    - **7 blocks**

# 2000 3 KB files
- 3KB files
    - **6 blocks per file**
    - **1 inode per file**
- 2000 directory entries
    - 32000 bytes = 63 blocks
    - **1 inode**
    - **64 blocks**
