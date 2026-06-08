# UI Revision Prompt: Step 1 - General Info (ข้อมูลทั่วไป)

**Target Agent:** Stitch by Google (UI/UX Design Agent)

## Context for Revision
You have previously created the UI for "Step 1: General Info & Photos" of the Property Evaluation Wizard. However, it needs to be updated to match the specific criteria from the book "เกมเศรษฐี" and our project guidelines.

## Key Instructions for this Revision

### 1. Thai Language First (บังคับใช้ภาษาไทย)
The target audience is Thai. Please update **ALL** UI labels, placeholders, and text to be in Thai as the primary language. You may keep small English subtitles if it helps with the design, but Thai must be the main focus.

*Example:*
Instead of "Property Name / Address", use "ชื่อสินทรัพย์ / ทำเลที่ตั้ง".
Instead of "Asking Price", use "ราคาขาย".

### 2. Add Missing Property Information Fields (ข้อมูลทรัพย์สินที่ขาดหายไป)
Please add the following input fields to the form:
- **ขนาดพื้นที่ (ตร.ม. / ตร.ว.)** - Size/Area of the property.
- **จำนวนห้องเช่า** - Number of rental units/rooms.
- **ปีก่อสร้าง** - Year the property was built.
- **สิ่งอำนวยความสะดวกในห้อง (เฟอร์นิเจอร์/เครื่องใช้ไฟฟ้า)** - *Note: This refers to appliances/furniture inside the room (e.g., AC, Fridge, TV), which is different from location amenities (like nearby malls or transport) which are handled in Step 2.* Consider using a multi-select dropdown, tag input, or a list of common checkboxes for this.

### 3. Add a "Live Summary" Financial Display (แถบสรุปผลการเงิน)
According to industry standards for financial tools, we need to show the expected returns, but they should be **Calculated/Read-only fields**, not inputs for the user to type in Step 1.

Please design a visually distinct **"Live Summary" area** (e.g., a floating bar at the top/bottom, or a prominent card at the top of the form) that displays:
- **กระแสเงินสดต่อเดือน (Monthly Cash Flow)**
- **ผลตอบแทนรูปเงินสด (CCR %)**

*Design Note:* Since the user hasn't entered income/expenses in Step 1 yet, these values can show placeholders like `฿ 0.00` and `0.00%`. The design should make it clear that these are calculated results that will update as they complete the wizard.

### 4. Retain Existing Good Elements
Keep the clean, mobile-first design, the progress bar, the image upload section, and the other financial inputs you already created, but translate them:
- ราคาขาย (Asking Price)
- มูลค่าตามการประเมิน (Appraised Value)
- เงินดาวน์ (Down Payment)

Please generate the updated Next.js/Tailwind code for this specific screen.