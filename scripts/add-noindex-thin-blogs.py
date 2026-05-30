#!/usr/bin/env python3
"""
Add robots noindex to thin blog pages (< 600 words in TSX).
These pages exist and serve a purpose (internal links, brand awareness)
but shouldn't consume crawl budget.
"""
import os
import re
import subprocess

BLOG_DIR = os.path.join(os.path.dirname(__file__), '..', 'app', 'blog')
WORD_THRESHOLD = 600

def count_words(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    return len(content.split())

def has_noindex(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    return 'index: false' in content or "index: 'noindex'" in content

def add_noindex(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if already has robots
    if 'robots:' in content and 'index: false' in content:
        return False, "already has noindex"
    
    if 'robots:' in content:
        return False, "already has robots config"
    
    # Find the metadata export and add robots before the closing brace
    # Pattern: find end of metadata object and insert robots before it
    # Look for 'alternates:' block end or last property before closing '};'
    
    # Strategy: find the metadata export closing }; and insert robots before it
    # Find the metadata object
    meta_match = re.search(r'export const metadata: Metadata = \{', content)
    if not meta_match:
        # Try without type annotation
        meta_match = re.search(r'export const metadata = \{', content)
    
    if not meta_match:
        return False, "no metadata export found"
    
    # Find matching closing brace for this object
    start = meta_match.end()
    depth = 1
    i = start
    while i < len(content) and depth > 0:
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
        i += 1
    
    # i is now past the closing }
    close_pos = i - 1  # position of the closing }
    
    # Insert robots: { index: false, follow: false }, before the closing }
    # Find the last non-whitespace character before closing brace
    insert_str = '\n  robots: { index: false, follow: false },'
    
    new_content = content[:close_pos] + insert_str + '\n' + content[close_pos:]
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    return True, "added noindex"

processed = []
skipped = []
errors = []

for slug in sorted(os.listdir(BLOG_DIR)):
    if slug == '[slug]':
        continue
    page_path = os.path.join(BLOG_DIR, slug, 'page.tsx')
    if not os.path.isfile(page_path):
        continue
    
    word_count = count_words(page_path)
    if word_count >= WORD_THRESHOLD:
        continue
    
    if has_noindex(page_path):
        skipped.append(f"{slug} (already noindex)")
        continue
    
    success, msg = add_noindex(page_path)
    if success:
        processed.append(f"{slug} ({word_count} words)")
        print(f"✓ Added noindex: {slug} ({word_count} words)")
    else:
        if 'already' in msg:
            skipped.append(f"{slug}: {msg}")
        else:
            errors.append(f"{slug}: {msg}")
            print(f"✗ Error: {slug}: {msg}")

print(f"\n{'='*50}")
print(f"Processed (added noindex): {len(processed)}")
print(f"Skipped (already handled): {len(skipped)}")
print(f"Errors: {len(errors)}")

if errors:
    print("\nErrors:")
    for e in errors:
        print(f"  - {e}")
