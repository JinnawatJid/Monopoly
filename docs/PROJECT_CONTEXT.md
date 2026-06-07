# Project Context: Real Estate Investment Analysis App ("เกมเศรษฐี")

## 1. Project Overview
This project is a Web Application designed to help users analyze real estate investments, inspired by the concepts and tools from the book "เกมเศรษฐี" by โค้ชหนุ่ม (จักรพงษ์ เมษพันธุ์).

The application serves as a digital transition from traditional paper-based recording. It provides a comprehensive suite of tools for recording property details, financial data, and performing both qualitative and quantitative analyses.

## 2. Target Audience
Real estate investors (both beginners and experienced) who want a structured, reliable, and easily accessible way to evaluate potential investment properties on the go.

## 3. Tech Stack
The project is built using modern, industry-standard, and cost-effective (free-tier friendly) technologies:
- **Frontend:** Next.js (React), TypeScript
- **Styling:** Tailwind CSS
- **Routing:** Next.js App Router (`/src/app`)
- **Backend & Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **File Storage (Images):** Supabase Storage

## 4. Core Features & Data Architecture
The application revolves around a "Property" (ทรัพย์สิน) entity. The analysis is broken down into several parts:

### A. General Information & Images (ข้อมูลทั่วไปและภาพประกอบ)
- Property name, location, asking price, appraised value, down payment.
- Ability to upload and view photos of the property.

### B. Qualitative Analysis (การวิเคราะห์เชิงคุณภาพ)
- **Job Sources (แหล่งงาน):** Proximity to employment hubs.
- **Amenities (แหล่งอำนวยความสะดวก):** Nearby hospitals, schools, malls, transport.
- **Target Tenants (ลักษณะของผู้เช่าที่เรามุ่งหวัง):** Who are the likely renters in this area?
- **Demand (ความต้องการ):** Is there high rental demand?
- **Pros & Cons (ข้อดีข้อเสีย)**
- **Required Improvements (สิ่งที่ต้องปรับปรุงก่อนปล่อยเช่า)**
- **Opportunities & Threats (โอกาสและอุปสรรคในพื้นที่)**
- **Income/Expense Opportunities (โอกาสในการสร้างรายได้เพิ่ม-ลดรายจ่าย)**

### C. Quantitative Analysis (การวิเคราะห์เชิงปริมาณ)
- **Income Summary (สรุปรายรับ):** Expected rent, parking fees, etc.
- **Expense Summary (สรุปรายจ่าย):** Maintenance, taxes, management fees, vacancy allowance.
- **Valuation (ประเมินราคาซื้อ)**
- **Purchasing Fees (ค่าธรรมเนียมการซื้อ):** Transfer fees, taxes.
- **Financing (เงินลงทุน/เงินกู้):** Loan amount, interest rate, term, monthly installment.
- **Returns (อัตราผลตอบแทน):**
  - **Monthly Cash Flow (กระแสเงินสดต่อเดือน):** Net Operating Income - Mortgage Payment.
  - **Cash-on-Cash Return (CCR):** (Annual Cash Flow / Total Initial Investment) * 100.

## 5. Future Development
This repository is initialized with the basic Next.js structure. Subsequent developments (especially UI/UX) will be handled by specialized AI agents (e.g., Stitch by Google). Prompt documents for these agents are included in this repository.