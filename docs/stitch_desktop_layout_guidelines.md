# Desktop Layout & UI Guidelines for Stitch

Stitch, when generating new pages or modifying existing ones—especially within multi-step forms like the Property Evaluation Wizard—please strictly adhere to the following desktop layout and consistency guidelines. These rules have been established to fix previous layout drift and maintain a unified user experience.

## 1. Global Components Usage
Do **not** hardcode duplicate layouts (like sidebars or top bars) into individual page files.
- **Top Bar:** Always import and use `<TopAppBar />` from `@/components/layout/TopAppBar`.
- **Sidebar (Wizard Navigation):** Always import and use `<NavigationDrawer />` from `@/components/layout/NavigationDrawer`.
- **Sidebar Width:** The `<NavigationDrawer />` has a fixed width of `w-80` and uses `shrink-0` to prevent it from collapsing when the main content area grows. Rely on the global component rather than rebuilding it.

## 2. Page Container & Spacing Structure
All wizard pages must follow this exact container structure to ensure the sidebar and main content align perfectly across steps:

```tsx
<div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
  <TopAppBar />

  <main className="flex-grow flex flex-col md:flex-row max-w-container-max mx-auto w-full md:gap-stack-lg">
    <NavigationDrawer />

    {/* Content Area */}
    <div className="flex-grow p-margin-mobile md:p-margin-desktop max-w-4xl pb-32 md:pb-margin-desktop">
      {/* Page Content Goes Here */}
    </div>
  </main>
</div>
```

## 3. Standardized Step Headers
Every step in a wizard must use the exact same header pattern. Do not deviate from this layout structure:

```tsx
<div className="mb-6">
  <div className="flex justify-between items-end mb-2">
    <div>
      <span className="text-primary font-label-md uppercase tracking-wider">
        [English Subtitle e.g., Property Setup]
      </span>
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-1">
        [Thai Main Title e.g., ข้อมูลทั่วไปและภาพประกอบ]
      </h2>
    </div>
    <span className="font-label-md text-primary">
      ขั้นตอนที่ [X] จาก [Y]
    </span>
  </div>
  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
    <div
      className="h-full bg-primary transition-all duration-500"
      style={{ width: "[Percentage]%" }}
    ></div>
  </div>
</div>
```

## 4. Strict Localization (Thai First)
The user's primary language is Thai.
- **No English Translations on Labels:** Do not append English translations in parentheses to form labels or text content.
  - *Incorrect:* `ความต้องการของผู้เช่า (Tenant Needs/Upgrades)`
  - *Correct:* `ความต้องการของผู้เช่า`
- The *only* exception to this rule is the small English subtitle above the main `h2` header on Wizard pages (e.g., "Property Setup" or "Qualitative Analysis"), which is a specific stylistic choice.