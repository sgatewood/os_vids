# Stats
- 4 byte fat entries
- 32 byte dir entries
- 2048 byte clusters

# 1) 200 30 KB files
- Directory cluster can have 64 entries
    - Need 4 clusters for directories
    - 4 FAT entries
- 30 KB files
    - 15 clusters each
    - 200 * 15 = 3000 clusters
    - 3000 FAT entries
- **Total: 3004 clusters/entries**


# 2) Directory of 2000 3KB files
- Directory cluster can have 64 entries
    - Need 32 directory clusters
    - 32 FAT entries
- Each file needs 2 clusters
    - 4000 clusters
    - 4000 FAT entries
- **Total: 4032 clusters/entries**
