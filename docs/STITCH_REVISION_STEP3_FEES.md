# Revision Prompt for Stitch - Property Evaluation Step 3 (Trading/Transfer Fees Addition)

> **STATUS: FULFILLED**
> This prompt was executed and the resulting HTML has been integrated into `src/app/properties/new/step3/page.tsx` with full React state management and automatic calculations.


You are updating the "Step 3: Quantitative Analysis" screen of the ROI Matrix Property Evaluation Wizard to add a new section for **"Trading/Transfer Fees" (ค่าธรรมเนียมการซื้อขาย)**.

Please revise the current HTML/Tailwind design based on the following instructions:

## 1. Localization (Thai First)
- All UI text, labels, and placeholders must be strictly localized to **Thai** without accompanying English labels or translations.

## 2. Placement
- Add this new "Trading/Transfer Fees" (ค่าธรรมเนียมการซื้อขาย) section at the **very bottom of Step 3**, right before the final submission/navigation buttons.

## 3. New Section: "ค่าธรรมเนียมการซื้อขาย" (Trading/Transfer Fees)
This section should be visually distinct (e.g., wrapped in a card or a bordered section like other groups) and contain the following elements:

### A. Manual Input Fields with Percentage Badges
Add standard text inputs (configured for numeric values with comma formatting) for the following fields. For fields with fixed statutory percentages, **display the percentage alongside the input field or label** (e.g., as a distinct badge, secondary text, or inside a right-aligned input addon, matching standard UI layouts for showing rates next to fields):

- **ราคาซื้อขาย** (Property Trading/Selling Value)
- **ราคาประเมิน** (Appraisal Value)
- **วงเงินกู้** (Loan Amount)
- **ค่าประเมิน** (Appraisal Fee)
- **ค่าธรรมเนียมการโอน 2%** (Transfer Fee) - *Display "2%" prominently next to the label or field.*
- **ค่าจดจำนอง 1%** (Mortgage Registration Fee) - *Display "1%" prominently next to the label or field.*
- **ภาษีเงินได้หัก ณ ที่จ่าย** (Withholding Tax)
  - *Crucial Addition:* Add an external link icon or button alongside this field linking to the official calculator: `https://rdsrv2.rd.go.th/landwht/formcal1.asp`. The link should open in a new tab (`target="_blank"`).

### B. Tax Type Toggle (Specific Business Tax vs. Stamp Duty)
Users need to choose which tax applies.
- Create a toggle, segmented control, or radio button group with two options:
  1. **ภาษีธุรกิจเฉพาะ 3.3%** (Specific Business Tax) - *Display "3.3%" prominently next to the label.*
  2. **อากรแสตมป์ 0.5%** (Stamp Duty) - *Display "0.5%" prominently next to the label.*
- Only one can be selected at a time. Include a manual input field next to or below this selection for the user to input the actual calculated tax amount.

### C. Fee Responsibility Split (การแบ่งจ่ายค่าธรรมเนียม)
Add a mechanism for the user to define who is responsible for paying these fees.
- Include a UI mechanism (like a dropdown, toggle buttons, or dual input fields) to specify the split between the Buyer (ผู้ซื้อ) and the Seller (ผู้ขาย).
- Common options to represent: "ผู้ขายจ่ายทั้งหมด" (Seller pays all), "ผู้ซื้อจ่ายทั้งหมด" (Buyer pays all), or "คนละครึ่ง" (Split 50/50).

## 4. UI/UX Guidelines
- Follow standard responsive design, ensuring it works perfectly on mobile (Mobile-First) while aligning with the desktop layout guidelines.
- Use Tailwind CSS v4 utility classes.
- Make sure input elements use `<input type="text">` to allow for real-time comma formatting (e.g., "1,000,000").
- Use consistent spacing and typography (IBM Plex Sans Thai) matching the rest of the application.

Please provide the fully updated HTML structure for Step 3 including these new additions.
