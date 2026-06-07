---
name: Property Analyzer
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#0058be'
  on-tertiary: '#ffffff'
  tertiary-container: '#2170e4'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style
The brand personality is authoritative yet accessible, designed to empower real estate investors with precision and clarity. The visual direction follows a **Corporate / Modern** style, emphasizing high legibility and a systematic approach to data density.

The aesthetic focuses on a "Financial Clarity" narrative: excessive decorative elements are stripped away in favor of whitespace and structured information hierarchy. The interface aims to evoke a sense of security and professional growth, using a clean, systematic layout that reflects the logic and rigor of financial analysis.

## Colors
The palette is anchored by a professional Emerald Green, symbolizing prosperity, growth, and cash flow. This primary color is used for success states, primary actions, and positive financial indicators.

- **Primary (Emerald 600):** Used for CTA buttons, active states, and growth-oriented data visualization.
- **Secondary (Slate 900):** Used for deep text, headers, and professional accents to provide grounding and authority.
- **Tertiary (Blue 500):** Used sparingly for informational callouts or interactive links that are non-primary.
- **Surface Colors:** A crisp white (#FFFFFF) background is paired with a very light gray (#F8FAFC) for container backgrounds to distinguish between different analysis modules.

## Typography
IBM Plex Sans (with Thai support) is the sole typeface, chosen for its "engineered" feel that bridges the gap between technical data and human readability.

- **Numerical Data:** For financial figures in tables or large displays, ensure the use of tabular lining figures (tnum) to maintain vertical alignment in columns.
- **Hierarchy:** Use FontWeight 600 for section headers and 500 for field labels to ensure they stand out against data inputs.
- **Mobile Scaling:** Large headlines scale down significantly on mobile to ensure that property addresses and ROI percentages remain on a single line where possible.

## Layout & Spacing
The design system utilizes a **Fluid Grid** model with a focus on vertical rhythm to handle long forms of financial data.

- **Mobile (Default):** A single-column layout with 16px side margins. Cards span the full width of the viewport minus margins.
- **Desktop:** A 12-column grid with 24px gutters. Analytical dashboards should utilize a two-column split: a 4-column sidebar for input parameters and an 8-column main area for results and visualizations.
- **Rhythm:** An 8px base grid governs all spacing. Vertical stacks of form fields use 16px (`stack-md`), while major section breaks use 32px (`stack-lg`).

## Elevation & Depth
This design system uses **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows to maintain a clean, professional "paper-like" feel.

- **Level 0 (Background):** #F8FAFC — Used for the main app background.
- **Level 1 (Cards/Containers):** #FFFFFF — Used for primary content modules with a 1px border in #E2E8F0.
- **Level 2 (Active/Floating):** Use a very soft, diffused shadow (0px 4px 12px rgba(0,0,0,0.05)) for modals or dropdown menus to lift them from the base layer.
- **Dividers:** 1px solid lines in #F1F5F9 are used to separate line items within a list or rows in a financial table.

## Shapes
A **Soft** shape language (4px - 8px radius) is applied to communicate precision.

- **Inputs and Buttons:** Use a 6px (0.375rem) border radius to maintain a crisp, professional look that isn't overly organic.
- **Large Cards:** Use an 8px (0.5rem) border radius.
- **Indicators:** Progress bars and status chips use a pill-shape (full rounding) to differentiate them from interactive buttons.

## Components
- **Buttons:** Primary buttons use the Emerald 600 background with white text. Secondary buttons use a Slate 900 outline or a subtle gray ghost style. Padding should be generous (12px 24px) to support mobile-first tapping.
- **Cards:** Property cards must include a high-contrast "ROI Badge" in the top right corner. Content inside cards should be divided by subtle hair-line rules.
- **Progress Indicators:** Linear progress bars for "Financing Completion" or "Down Payment Goals" use Emerald 600 for the fill and Slate 100 for the track.
- **Structured Forms:** Input fields must have clearly defined states. The "Active" state uses an Emerald 600 1px border and a subtle 2px glow in Emerald 50.
- **Data Tables:** On mobile, tables should reflow into "List Cards." On desktop, headers should be sticky with a subtle Slate 50 background.
- **Chips:** Status tags (e.g., "Positive Cash Flow," "Under Value") use low-saturation background tints of the status color with high-saturation text for readability.