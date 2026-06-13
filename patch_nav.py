import re

with open("src/app/properties/new/step3/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the "คำนวณและไปต่อ" button with a Link
old_button = '''<button
            className="flex-[2] md:flex-none md:w-64 h-12 rounded-full bg-primary text-on-primary font-label-md flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
            type="button"
          >
            <span>คำนวณและไปต่อ</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>'''

new_link = '''<Link
            href="/properties/new/step4"
            className="flex-[2] md:flex-none md:w-64 h-12 rounded-full bg-primary text-on-primary font-label-md flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
          >
            <span>คำนวณและไปต่อ</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>'''

content = content.replace(old_button, new_link)

with open("src/app/properties/new/step3/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
