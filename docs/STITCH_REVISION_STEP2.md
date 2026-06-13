# Revision Prompt for Stitch - Property Evaluation Step 2 (Qualitative Analysis)

You are updating the "Step 2: Qualitative Analysis (การวิเคราะห์เชิงคุณภาพ)" screen of the ROI Matrix Property Evaluation Wizard.

Please revise the current HTML/Tailwind design based on the following feedback:

## 1. Localization (Thai First)
Currently, many labels and placeholder texts are either in English or English (Thai).
- Please localize all UI text to display mainly in **Thai**.
- You can keep English in parentheses if it's a very common industry term, but the primary labels, placeholders, and descriptions must be Thai.
- Example: "Required Improvements" -> "สิ่งที่ต้องปรับปรุงก่อนเช่า"
- Example: "Pros & Cons" -> "ข้อดี/ข้อเสีย"

## 2. Update "Demand Analysis" Section
- Remove the "Demand Level" (High/Medium/Low) dropdown.
- Replace it with a new field: **"ความต้องการของผู้เช่า (Tenant Needs/Upgrades)"**.
- This new field should use a **tag-based input design** (exactly like the "Amenities" field in the Surrounding Environment card). This will allow users to add specific needs like "Cable TV", "Internet Router", "Fridge", "Oven", etc.
- Keep the "ลักษณะของผู้เช่า" (Target Tenants) text area as it is.

## 3. Add New "Future Outlook & Opportunities" Section
Please add a new bento card (or sections within a card) to capture future potential and financial opportunities. This new section should include two new text areas:
- **โอกาสในการสร้างรายได้เพิ่ม/ลดรายจ่าย** (Opportunities to increase income / decrease expenses)
- **โอกาสและอุปสรรคของพื้นที่ในอนาคต** (Future opportunities and threats of the area)
- *Design Suggestion:* Group these two together into a new Bento card titled "แนวโน้มและโอกาสในอนาคต" (Future Outlook & Opportunities) to keep the layout clean and balanced.

## 4. Retain Good Elements
- Keep the "ข้อดี/ข้อเสีย" (Pros & Cons) section exactly as it is (just localize the text to Thai).
- Keep the overall Bento Grid layout, the progress indicator, and the bottom navigation actions.

Please output the completely revised HTML code incorporating these changes.