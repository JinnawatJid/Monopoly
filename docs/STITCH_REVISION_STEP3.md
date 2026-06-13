# Revision Prompt for Stitch - Property Evaluation Step 3 (Quantitative Analysis)

You are updating the "Step 3: Quantitative Analysis" screen of the ROI Matrix Property Evaluation Wizard.

Please revise the current HTML/Tailwind design based on the following feedback:

## 1. Localization (Thai First)
- Please localize all UI text to display mainly in **Thai**.
- You can keep English in parentheses if it's a very common industry term, but the primary labels, placeholders, and descriptions must be Thai.

## 2. Simplify "Expenses" Section
- Remove the "Maintenance (ซ่อมบำรุง)" and "Tax (ภาษีที่ดิน/โรงเรือน)" fields.
- Keep ONLY the "Management Fees (ค่าส่วนกลาง/บริหาร)" field in this section.

## 3. Remove Sections
- Completely remove the **"Purchase Fees (ค่าธรรมเนียม)"** section.
- Completely remove the **"Financing (สินเชื่อ)"** section.

## 4. Add "ประเมินราคาซื้อ" (Purchase Price Estimation) Section
Add a new section titled "ประเมินราคาซื้อ". This section should contain:
- **Auto-Calculated Fields:**
  - รายรับรวมต่อปี (Total Annual Income)
  - รายจ่ายรวมต่อปี (Total Annual Expenses)
  - รายได้จากการดำเนินงานต่อปี (NOI - Net Operating Income)
  *(UX Note: Design these three fields as read-only summary blocks. For example, use a slightly darker surface background with bold text and NO input borders, so it is instantly clear they are calculated results, not inputs.)*

- **Manual Input Field:**
  - อัตราผลตอบแทนที่ต้องการ (Target Yield/Cap Rate) - allow percentage input (%).

- **Final Calculation Display:**
  - ราคาเสนอซื้อ (Target Purchasing Price)
  *(UX Note: This is derived by dividing NOI by the Target Yield. Make this visually prominent as it is the main output of this step.)*

## 5. Update Bottom Summary Card
- The current green summary card displays "Calculated Debt-to-Income (DTI)" and "Estimated Net Cash Flow".
- Update this card to display the newly calculated **"รายได้จากการดำเนินงานต่อปี (NOI)"** and **"ราคาเสนอซื้อ (Target Purchasing Price)"** instead.

Please output the completely revised HTML code incorporating these changes.