import os
import glob
import re

def main():
    print("Starting post-build CSS inliner...")
    
    # 1. Find compiled CSS files
    css_files = glob.glob("dist/assets/*.css")
    if not css_files:
        print("No CSS files found in dist/assets/. Nothing to inline.")
        return
        
    css_file_path = css_files[0]
    print(f"Found compiled CSS file: {css_file_path}")
    
    # 2. Read CSS content
    with open(css_file_path, "r", encoding="utf-8") as f:
        css_content = f.read().strip()
        
    # 3. Read built index.html
    html_path = "dist/index.html"
    if not os.path.exists(html_path):
        print(f"Error: {html_path} does not exist.")
        return
        
    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()
        
    # 4. Search for stylesheet link tag
    # Example: <link rel="stylesheet" crossorigin href="/assets/index-D3gH52aL.css">
    css_filename = os.path.basename(css_file_path)
    pattern = rf'<link\s+[^>]*href="[^"]*{css_filename}"[^>]*>'
    
    match = re.search(pattern, html_content)
    if not match:
        # Try a more generic link stylesheet search
        pattern = r'<link\s+rel="stylesheet"\s+[^>]*href="[^"]*assets/[^"]*\.css"[^>]*>'
        match = re.search(pattern, html_content)
        
    if match:
        link_tag = match.group(0)
        print(f"Found link tag to replace: {link_tag}")
        style_tag = f"<style>{css_content}</style>"
        html_content = html_content.replace(link_tag, style_tag)
        print("Successfully inlined CSS.")
    else:
        print("Warning: Could not find stylesheet link tag in dist/index.html. Appending to head instead.")
        html_content = html_content.replace("</head>", f"<style>{css_content}</style></head>")
        
    # 5. Write modified index.html back
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
        
    # 6. Clean up the external CSS file (optional but keeps build clean)
    try:
        os.remove(css_file_path)
        print(f"Removed external CSS file: {css_file_path}")
    except Exception as e:
        print(f"Warning: Could not remove CSS file: {e}")
        
    print("Post-build optimization complete! Zero external CSS requests.")

if __name__ == "__main__":
    main()
