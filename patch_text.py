import re

with open("src/app/properties/new/step3/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Delete text
content = content.replace('''<p className="font-body-sm text-secondary mt-2">
                กรุณาระบุข้อมูลทางการเงินเพื่อคำนวณราคาเสนอซื้อที่เหมาะสม
              </p>''', '')

content = content.replace('''<h3 className="font-headline-md">รายรับ (Income)</h3>''', '''<h3 className="font-headline-md">รายรับ</h3>''')
content = content.replace('''<h3 className="font-headline-md">รายจ่าย (Expenses)</h3>''', '''<h3 className="font-headline-md">รายจ่าย</h3>''')
content = content.replace('''<h3 className="font-headline-md">
                    ประเมินราคาซื้อ (Purchase Price Estimation)
                  </h3>''', '''<h3 className="font-headline-md">
                    ประเมินราคาซื้อ
                  </h3>''')
content = content.replace('''<span className="font-label-md text-primary">
                    ราคาเสนอซื้อที่แนะนำ (Target Purchasing Price)
                  </span>''', '''<span className="font-label-md text-primary">
                    ราคาเสนอซื้อที่แนะนำ
                  </span>''')

with open("src/app/properties/new/step3/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
