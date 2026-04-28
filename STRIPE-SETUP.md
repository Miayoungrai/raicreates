# RaiCreates — Stripe Payment Link Setup Guide

Your products are already created in Stripe. You just need to create
a **Payment Link** for each one, then paste the URL into the site files.

---

## Your Stripe Product IDs

| Product | Stripe Product ID | Price | File to Update |
|---|---|---|---|
| The Spark Collective | `prod_ULibchcENR9cAS` | $47/mo | `pages/coaching.html` |
| The Reset Immersion | `prod_ULj4PqaKlXonQJ` | $1,200 | `pages/coaching.html` |
| Creative Catalyst VIP | `prod_ULjBkCnBB3K2ts` | $3,000 | `pages/coaching.html` |
| Art Regulation Lab | `prod_ULk8uKEi3rHA7F` | $50 | `pages/coaching.html` |
| Burnout Prevention Workbook | `prod_ULjIJkEcGwp5oT` | $27 | `pages/shop.html` |
| Color Psychology Guide | `prod_ULjJK8qRYUgeSj` | $15 | `pages/shop.html` |
| Starter Bundle | `prod_ULjMMA7dObvJUD` | $45 | `pages/shop.html` |
| Strong Women Coloring Pack | *(create in Stripe)* | $12 | `pages/shop.html` |

---

## How to Create a Payment Link (takes 2 minutes each)

1. Go to: **dashboard.stripe.com/payment-links**
2. Click **+ New**
3. Under "Add a product", search for the product name
4. Set the price if not already set
5. For The Spark Collective: set billing to **Recurring → Monthly**
6. Click **Create link**
7. Copy the URL — it looks like: `https://buy.stripe.com/xxxxxxxx`

---

## Where to Paste Each Link

### coaching.html — find `function stripeCheckout` and update:
```javascript
spark:     'https://buy.stripe.com/YOUR_ACTUAL_LINK',  // Spark Collective
immersion: 'https://buy.stripe.com/YOUR_ACTUAL_LINK',  // Reset Immersion
vip:       'https://buy.stripe.com/YOUR_ACTUAL_LINK',  // Creative Catalyst VIP
'art-lab': 'https://buy.stripe.com/YOUR_ACTUAL_LINK'   // Art Regulation Lab
```

### shop.html — find `function shopCheckout` and update:
```javascript
'workbook':    'https://buy.stripe.com/YOUR_ACTUAL_LINK',  // Burnout Workbook
'color-guide': 'https://buy.stripe.com/YOUR_ACTUAL_LINK',  // Color Guide
'mandalas':    'https://buy.stripe.com/YOUR_ACTUAL_LINK',  // Strong Women Pack
'bundle':      'https://buy.stripe.com/YOUR_ACTUAL_LINK',  // Starter Bundle
```

---

## Tip: Test Mode vs Live Mode
- Your products were created in Stripe. Make sure you are in **Live Mode**
  (not Test Mode) when creating Payment Links for real purchases.
- Toggle at the top-left of your Stripe dashboard.
