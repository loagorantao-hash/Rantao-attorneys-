

## Plan: Layout Refinement — Centering, Card Redesign & Contact Page Structure

This plan addresses content centering, card grid balance, card redesign on the Index page, About page readability, and Contact page structure. No changes to colors, typography, or content.

---

### 1. Global Content Centering (All Pages)

**File: `src/pages/About.tsx`, `src/pages/Services.tsx`, `src/pages/Team.tsx`, `src/pages/Contact.tsx`**

All hero sections currently have `className="max-w-3xl"` without centering — this left-aligns the hero text on wide screens. Fix by adding `mx-auto text-center` to hero `motion.div` blocks on all pages.

---

### 2. Index Page — Service Cards Redesign

**File: `src/pages/Index.tsx`**

Redesign the 6 service cards (lines 131-155) to the new structured layout:

- **Card header**: Icon and title on the same horizontal row (`flex items-center gap-3`)
- **Card body**: Description below the header
- **Card action**: Replace the `<Link>` text link with a small `<Button>` ("Learn more") at the bottom
- **Card container**: Add `flex flex-col h-full` for equal-height cards, push button to bottom with `mt-auto`

Also redesign the "Why Choose Us" cards (lines 196-211) similarly:
- Icon + title on same row
- Description below
- No action button needed here (these are info cards)

Center the grid: already centered via `container-wide` — just confirm `max-w-5xl mx-auto` wrapper if needed.

---

### 3. About Page — Readability & Focus

**File: `src/pages/About.tsx`**

- Hero (line 35): Add `mx-auto text-center` to the `max-w-3xl` div
- "Built on Excellence" section (lines 50-97): Add `max-w-6xl mx-auto` to the grid wrapper for tighter centering
- Values grid (line 117): Already centered — no change
- "What Sets Us Apart" (lines 144-195): Add `max-w-6xl mx-auto`

---

### 4. Services Page — Centering

**File: `src/pages/Services.tsx`**

- Hero (line 60): Add `mx-auto text-center` to `max-w-3xl`
- Services list (line 77): Add `max-w-5xl mx-auto` to constrain the wide cards

---

### 5. Team Page — Centering

**File: `src/pages/Team.tsx`**

- Hero (line 36): Add `mx-auto text-center`
- Team grid and "Get in contact today" section: already centered — no changes needed

---

### 6. Contact Page — Desktop Layout

**File: `src/pages/Contact.tsx`**

- Hero (line 81): Add `mx-auto text-center`
- The two-column layout (line 98) is already structured correctly: left = contact cards + map, right = form. The grid `lg:grid-cols-[1fr_1.4fr]` is fine. Just add `max-w-6xl mx-auto` to the grid wrapper for tighter centering on very wide screens.

---

### Summary of Files to Edit

| File | Changes |
|---|---|
| `src/pages/Index.tsx` | Center hero; redesign service cards (icon+title row, button action); center "Why Choose Us" cards (icon+title row) |
| `src/pages/About.tsx` | Center hero text; add `max-w-6xl mx-auto` to content sections |
| `src/pages/Services.tsx` | Center hero text; add `max-w-5xl mx-auto` to services list |
| `src/pages/Team.tsx` | Center hero text |
| `src/pages/Contact.tsx` | Center hero text; add `max-w-6xl mx-auto` to grid |

### Technical Detail — Card Structure

Current Index service card:
```text
┌──────────────┐
│  [icon]      │
│  Title       │
│  Description │
│  Learn more →│
└──────────────┘
```

New card layout:
```text
┌──────────────────────┐
│ [icon]  Title        │
│                      │
│ Description text     │
│ sits here below      │
│                      │
│ [ Learn More ]       │
└──────────────────────┘
```

- Icon and title share a horizontal row
- Description below
- Small rectangular button replaces the text link
- Equal card heights via flexbox

