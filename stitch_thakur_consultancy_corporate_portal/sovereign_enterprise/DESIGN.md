---
name: Sovereign Enterprise
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444651'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#747782'
  outline-variant: '#c4c6d2'
  surface-tint: '#3d5ca2'
  primary: '#001a48'
  on-primary: '#ffffff'
  primary-container: '#002d72'
  on-primary-container: '#7a97e2'
  inverse-primary: '#b1c5ff'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#1a1d1e'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f3233'
  on-tertiary-container: '#989a9b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001946'
  on-primary-fixed-variant: '#224489'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system embodies the authority and precision required for high-stakes business consultancy in New Delhi. The brand personality is **Stately, Expert, and Transparent**. It targets C-suite executives and business owners who demand institutional reliability paired with modern agility.

The visual style is a sophisticated blend of **Corporate Modern** and **Glassmorphism**. We utilize the structural integrity of traditional enterprise design—clear hierarchies and generous whitespace—and soften it with contemporary glass effects to signify the "transparency" of HR and compliance services. The result is a UI that feels established yet forward-thinking, evoking a sense of "prestige-tech."

## Colors

The palette is rooted in institutional trust and luxury.

*   **Primary (Deep Professional Blue):** Used for headers, primary actions, and brand identification. It represents depth and stability.
*   **Secondary (Elegant Gold):** Used sparingly for high-value accents, success states, and premium call-to-actions. It should be applied as a subtle linear gradient (from `#D4AF37` to `#C5A059`) to avoid a flat appearance.
*   **Neutral & Background:** The canvas is a "Crisp White," while secondary backgrounds use a very light cool gray to maintain a professional atmosphere.
*   **Glass Accents:** Transparent layers use a white fill at 60-80% opacity with a high-saturation background blur.

## Typography

The system utilizes a dual-font strategy to balance modernity with professional grounding.

**Manrope** is the headline face. Its geometric yet slightly condensed nature provides a technical, high-end feel suitable for financial and compliance data. Use Bold or Semi-Bold weights for all headings to establish a strong "Premium Corporate" voice.

**Work Sans** serves as the workhorse for body copy and labels. It is chosen for its exceptional legibility in dense accounting or HR reports. Labels should often be set in All-Caps with slight letter spacing to denote secondary hierarchy and professional categorization.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to maintain a prestigious, centered "editorial" feel, and a **Fluid Grid** for mobile devices.

*   **Desktop:** 12-column grid with a 1280px max-width. Gutters are fixed at 24px to provide breathing room between complex data sets.
*   **Spacing Rhythm:** All spacing is based on an 8px base unit. Vertical rhythm should be generous—favoring whitespace to reduce the cognitive load inherent in business consultancy apps.
*   **Reflow:** On Tablet, the 12-column grid collapses to 8 columns. On Mobile, it collapses to 4 columns with margins reduced to 20px to maximize screen real estate for tables and forms.

## Elevation & Depth

Hierarchy is established through a combination of **Glassmorphism** and **Ambient Shadows**.

1.  **Base Layer:** Solid white or light-gray backgrounds.
2.  **Interactive Layer (Cards/Modals):** Glassmorphic surfaces with a `20px` background blur and a `1px` semi-transparent white border. This border acts as a "rim light" to define the edge of the element.
3.  **Shadows:** Shadows are never pure black. They use a Tinted Blue (`#002D72` at 8% opacity) with a large blur radius (30px-40px) and a subtle 4px vertical offset to suggest the element is floating gracefully above the page.

## Shapes

The shape language is **Refined and Balanced**. We avoid the aggressive roundness of consumer apps while shunning the sharp corners of legacy enterprise software.

*   **Standard Elements:** 0.5rem (8px) radius for buttons, input fields, and small containers.
*   **Large Containers:** 1rem (16px) radius for cards and modal windows to emphasize the soft glass effect.
*   **Decorative Elements:** Subtle 45-degree chamfers may be used on icons or accent lines to nod to architectural precision.

## Components

*   **Buttons:** Primary buttons use the Deep Blue fill with white text. "Premium" buttons use the Golden gradient. Both feature a subtle hover state where the shadow expands slightly.
*   **Cards:** The signature component. These must use the Glassmorphism treatment (Blur + Rim Border) and a soft ambient shadow. They are used to group HR profiles, compliance checklists, or financial summaries.
*   **Input Fields:** Ghost-style inputs with a 1px "Cool Gray" border. On focus, the border transitions to Primary Blue with a subtle 2px outer glow.
*   **Chips/Tags:** Used for status (e.g., "Compliant", "Pending"). These use low-saturation versions of the status color with a high-contrast label font.
*   **Lists:** High-density data lists use alternating row colors (White and 2% Blue-Gray) with a subtle vertical gold line to indicate the active or selected row.
*   **Data Visualization:** Charts should use the Primary Blue and Golden Accents as the primary data points, with soft gradients in bar and area charts to maintain the high-end aesthetic.