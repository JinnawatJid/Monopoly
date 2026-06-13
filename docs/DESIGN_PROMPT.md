# UI/UX Design Prompt for Stitch

**Target Agent:** Stitch by Google (UI/UX Design Agent)

## Context
You are designing the user interface for a Real Estate Investment Analysis Web App. The app is inspired by the book "เกมเศรษฐี" by โค้ชหนุ่ม. It helps investors digitize their property evaluation process, replacing paper-based worksheets with a modern web application.

The tech stack is **Next.js (App Router), TypeScript, and Tailwind CSS**. Please provide the implementation using these technologies.

## Design Philosophy & Guidelines
1. **Mobile-First Approach:** Real estate investors are often on the go, surveying properties. The UI *must* be heavily optimized for mobile devices first. Elements should be easy to tap, forms easy to fill on small screens, and the layout responsive. Desktop view is secondary but should still look clean.
2. **Clean & Professional:** Use a clean, modern, and trustworthy aesthetic. It's a financial tool, so clarity of information is paramount. Avoid clutter.
3. **Industry Standards:** Use established UI/UX patterns (e.g., standard input fields, clear primary/secondary buttons, recognizable icons, bottom navigation or hamburger menus for mobile).
4. **Step-by-Step Forms:** To avoid overwhelming the user with massive forms on mobile, data entry should be broken down into logical steps or wizards.

## Required Screens / Flow

Please design and implement the UI components and pages for the following flow. Focus on building the visual components and layout; the backend integration (Supabase) will be wired up later, but please set up the UI state appropriately.

### 1. Dashboard (หน้าหลัก)
- **Purpose:** A summary of all properties the user is currently evaluating or has saved.
- **UI Elements:**
  - Header with App Title ("เกมเศรษฐี - Property Analyzer" or similar).
  - "Add New Property" FAB (Floating Action Button) or prominent button.
  - A list or grid of property cards.
  - **Property Card:** Should show a thumbnail image (if uploaded), property name/address, asking price, and a quick indicator of the calculated CCR (Cash-on-Cash Return) if available.

### 2. Add/Edit Property Flow (Multi-Step Form)
When the user clicks "Add New Property", they should enter a multi-step wizard. Please design a progress indicator (e.g., Step 1 of 4) and navigational buttons (Next, Previous, Save Draft).

#### Step 1: General Info & Photos (ข้อมูลทั่วไปและภาพประกอบ)
- **Inputs:** Property Name/Address (Text), Asking Price (Number), Appraised Value (Number), Down Payment (Number).
- **Image Upload:** A modern, tap-friendly image upload area allowing multiple photos. Show thumbnail previews of uploaded photos.

#### Step 2: Qualitative Analysis (การวิเคราะห์เชิงคุณภาพ)
- **Inputs:** (These can be Textareas or Tag inputs where appropriate)
  - Job Sources in the area (แหล่งงาน)
  - Amenities (แหล่งอำนวยความสะดวก)
  - Target Tenants (ลักษณะของผู้เช่าที่เรามุ่งหวัง)
  - Demand level (ความต้องการ) - maybe a slider or dropdown (High/Med/Low)
  - Pros & Cons (ข้อดี / ข้อเสีย)
  - Required Improvements (สิ่งที่ต้องปรับปรุงก่อนปล่อยเช่า)
  - Opportunities & Threats (โอกาสและอุปสรรค)

#### Step 3: Quantitative Analysis (การวิเคราะห์เชิงปริมาณ)
*Note: Make number inputs easy to use on mobile (e.g., using `type="number"` or numeric keypads).*
- **Income (รายรับ):** Estimated monthly rent, other income.
- **Expenses (รายจ่าย):** Common area/Management fees.
- **Purchase Price Estimation (ประเมินราคาซื้อ):**
  - Read-only Auto-calculated fields: Total Annual Income, Total Annual Expenses, Net Operating Income (NOI).
  - Input field: Target Yield/Cap Rate (%) (อัตราผลตอบแทนที่ต้องการ).
  - Main Output display: Target Purchasing Price (ราคาเสนอซื้อ).

#### Step 4: Summary & Results (สรุปผลการลงทุน)
- **Purpose:** Display the calculated results based on the inputs from Step 3. (You can use placeholder calculation logic for now).
- **UI Elements:**
  - Visually distinct "Scorecard" or highlight section.
  - **Monthly Cash Flow (กระแสเงินสดต่อเดือน):** Highlight in Green if positive, Red if negative.
  - **Cash-on-Cash Return - CCR (%):** Prominent display.
  - A summary breakdown of total initial investment vs. total monthly expenses vs. total monthly income.
  - "Save Property" button to complete the flow.

## Implementation Details for Stitch
- Ensure all Tailwind classes used are standard.
- Create reusable components where it makes sense (e.g., `Card`, `InputField`, `StepIndicator`).
- For icons, you can use `lucide-react` (standard in Next.js ecosystems).
- Ensure the layout wrapper correctly restricts width on larger screens to keep the mobile-first feel centered, or expands gracefully.