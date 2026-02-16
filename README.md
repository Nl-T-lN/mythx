# MythX — CTF Community 2026

A dark, cyber-themed CTF (Capture The Flag) community event website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

## 🚀 Tech Stack

| Layer       | Technology               |
|-------------|--------------------------|
| Framework   | Next.js 16 (App Router)  |
| Language    | TypeScript (TSX)         |
| Styling     | Tailwind CSS v4          |
| Animation   | Framer Motion (minimal)  |
| Font        | Inter (Google Fonts)     |

## 📂 Project Structure

```
src/
  app/
    layout.tsx          # Root layout (Navbar + Footer)
    page.tsx            # Home — Hero, About, CTA, Contact sections
    about/page.tsx      # About — Mission, CTF categories, Why Join, CTA
    register/page.tsx   # Register — Tier select, form, payment, success modal
    contact/page.tsx    # Contact — Info cards + contact form

  components/
    layout/
      Navbar.tsx        # Sticky glass navbar with mobile hamburger
      Footer.tsx        # Footer with links and contact info
      MobileMenu.tsx    # Full-screen mobile menu overlay

    registration/
      TierSelector.tsx  # Free / Premium tier cards
      RegisterForm.tsx  # Registration form fields
      PaymentPanel.tsx  # UPI payment details (premium only)
      SuccessModal.tsx  # Registration success overlay

    sections/
      Hero.tsx          # Animated hero with gradient orbs
      AboutSection.tsx  # Two-column about with highlight cards
      CTASection.tsx    # Glass CTA card
      ContactSection.tsx # Contact info cards

    ui/
      Button.tsx        # primary / secondary / outline variants
      Card.tsx          # Glass-effect card
      Input.tsx         # Dark input with glow focus
      GlassContainer.tsx # Reusable glass wrapper

  styles/
    globals.css         # Tailwind directives + design tokens + base styles
    theme.ts            # TypeScript color constants
```

## 🎨 Design

- **Dark cyber theme** with liquid-glass UI (backdrop-blur + semi-transparent backgrounds)
- Design tokens: cyan accent (`#00F5D4`), purple accent (`#7C3AED`), dark backgrounds (`#0A0F1C`, `#0F172A`)
- Mobile-first responsive design
- Framer Motion fade+slide-up on Hero section
- All animations capped at 300ms, ease-out, no loops
- Custom scrollbar and selection colors

## 📄 Pages

### Home (`/`)
Hero → About Section → CTA Section → Contact Section

### About (`/about`)
Hero → Mission → CTF Categories (6 cards) → Why Join (4 benefits) → CTA

### Register (`/register`)
- **Tier Selector**: Free (₹0) or Premium (₹200) with glow effect
- **Registration Form**: Name, email, phone, college, experience level, team name
- **Payment Panel**: Shown only for premium — UPI QR, transaction ID, screenshot upload
- **Success Modal**: Confirmation overlay with tier info

### Contact (`/contact`)
Hero → Contact info cards (Phone, Email, Location) → Contact form with success state

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📋 Form Behavior

- **Free registration**: Submits to `POST /api/register`
- **Premium registration**: Submits to `POST /api/payment`
- Client-side validation on all required fields
- Success modal shown on submission

## ⚡ Performance

- No images above 300KB
- No autoplay videos or infinite animations
- Server components by default; client components only where interactivity is needed
- Static pages prerendered at build time

## ♿ Accessibility

- Semantic HTML throughout
- All inputs labeled
- All buttons have defined types
- Keyboard-navigable focus states with cyan glow

---

Built with ❤️ for the cybersecurity community.
