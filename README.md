# RaiCreates Website

A full multi-page website for RaiCreates — the creative wellness brand by Rai.

## Pages
- `index.html` — Homepage
- `pages/about.html` — About + Contact
- `pages/coaching.html` — Coaching programs (Spark Collective, Reset Immersion, VIP)
- `pages/experiences.html` — Immersive art experiences + booking
- `pages/gallery.html` — Art gallery with VR viewer (A-Frame)
- `pages/quiz.html` — Interactive Creative Block Quiz
- `pages/challenges.html` — Free creative challenges
- `pages/shop.html` — Digital products shop

---

## Publishing to GitHub Pages

### Step 1: Create a GitHub repository
1. Go to github.com and create a new public repository
2. Name it `raicreates` (or `yourusername.github.io` for a root domain)

### Step 2: Push these files
```bash
git init
git add .
git commit -m "Initial site launch"
git remote add origin https://github.com/YOUR_USERNAME/raicreates.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo Settings > Pages
2. Under "Source", select "Deploy from a branch"
3. Select `main` branch, `/ (root)` folder
4. Click Save
5. Your site will be live at `https://YOUR_USERNAME.github.io/raicreates/`

### Step 4: Custom domain (raicreates.com)
1. In Settings > Pages, add your custom domain
2. Create a `CNAME` file in the root with your domain: `raicreates.com`
3. In your domain registrar (Namecheap, GoDaddy, etc.), add DNS records:
   - A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME record: `www` → `YOUR_USERNAME.github.io`

---

## Setting Up Stripe Payments

GitHub Pages is a static host, so Stripe requires one of these approaches:

### Option A: Stripe Payment Links (Easiest — No backend needed)
1. Go to [dashboard.stripe.com/payment-links](https://dashboard.stripe.com/payment-links)
2. Create a Payment Link for each product/program
3. In the relevant HTML files, replace `alert(...)` with:
   ```javascript
   window.location.href = 'https://buy.stripe.com/YOUR_LINK_ID';
   ```

### Option B: Snipcart (Drop-in cart, works with static sites)
1. Sign up at snipcart.com
2. Add their script to your pages
3. Add `data-item-*` attributes to your buy buttons

### Option C: Netlify/Vercel Functions (If you move off GitHub Pages)
Deploy to Netlify or Vercel instead and use serverless functions to create
Stripe Checkout Sessions. Much more flexible.

---

## Setting Up the Contact Form

### Formspree (Free, works with GitHub Pages)
1. Sign up at formspree.io
2. Create a new form, get your form ID
3. In `pages/about.html`, update the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
   ```
4. Remove the `onsubmit="submitContact(event)"` JS or update it

---

## VR Gallery Setup

The VR gallery uses A-Frame (aframe.io) which is loaded from CDN. It works
out of the box on desktop (look around with mouse) and on any WebXR-compatible
VR headset (Quest, etc.).

### To add real artwork images to VR:
In `js/gallery.js`, in the `openVR()` function, update each painting's
A-Frame plane to include a real texture:

```javascript
// In the paintings template literal, replace the color plane with:
<a-image src="#artwork-1-img" width="1.4" height="1.1" position="0 0 0.01"></a-image>
```

Then add to `<a-assets>`:
```html
<img id="artwork-1-img" src="../images/artwork-1.jpg" crossorigin="anonymous">
```

---

## Adding Your Photo

In `pages/about.html`, replace the placeholder SVG section with:
```html
<img src="../images/rai-portrait.jpg" alt="Rai" style="width:100%; height:100%; object-fit:cover; border-radius:var(--radius-lg);" />
```

Add your portrait to `/images/rai-portrait.jpg`.

---

## Updating Content

All pricing, program descriptions, and copy can be edited directly in the HTML files.
Artwork data in the gallery is stored in `js/gallery.js` in the `artworks` object.

---

## SEO

The site includes:
- Unique `<title>` and `<meta description>` on every page
- Open Graph tags for social sharing
- Twitter card tags
- Structured data (JSON-LD) on homepage
- Semantic HTML with proper heading hierarchy
- `<link rel="canonical">` tags

Update the `og:url` and `og:image` tags in `index.html` once your domain is live.
Create an `images/og-image.jpg` (1200×630px) for social sharing previews.

---

## Brand Colors

| Variable | Value | Usage |
|---|---|---|
| `--gold` | #c9a96e | Primary accent, CTAs |
| `--coral` | #e07560 | Secondary accent |
| `--sage` | #8aab96 | Tertiary accent |
| `--cream` | #f5efe6 | Primary text |
| `--black` | #0d0d0d | Background |
