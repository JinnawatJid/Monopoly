import re

with open("src/app/properties/new/step3/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the recalculate button and the preceding divider
pattern = r'<div className="h-px md:h-12 w-full md:w-px bg-on-primary/20"></div>\s*<button\s*className="bg-on-primary text-primary px-8 py-3 rounded-full font-label-md shadow-lg hover:bg-on-primary/90 transition-all flex items-center gap-2"\s*type="button"\s*>\s*<span>คำนวณใหม่</span>\s*<span className="material-symbols-outlined text-\[18px\]">\s*refresh\s*</span>\s*</button>'

new_content = re.sub(pattern, '', content, flags=re.DOTALL)

with open("src/app/properties/new/step3/page.tsx", "w", encoding="utf-8") as f:
    f.write(new_content)
