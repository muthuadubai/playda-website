# 📸 Adding Screenshots to Playda Website

## ✅ What's Been Set Up

The website is now configured to display real screenshots in two places:

### 1. **Hero Section** - Mobile App Screenshot
- **Location:** Top of homepage (phone mockup)
- **File needed:** `src/assets/images/app-screenshot.png`
- **Best for:** Main app screen showing court listings or booking interface

### 2. **Owners Section** - Dashboard Screenshot  
- **Location:** "Grow Your Padel Business" section
- **File needed:** `src/assets/images/owner-dashboard.png`
- **Best for:** The payment dashboard screenshot you just shared (or similar)

## 🚀 How to Add Your Screenshots

### Step 1: Save the Owner Dashboard Screenshot
1. Save the payment dashboard image you shared as: `owner-dashboard.png`
2. Place it in: `src/assets/images/owner-dashboard.png`

### Step 2: Add Mobile App Screenshot (Optional)
1. Take a screenshot of your Playda mobile app
2. Save it as: `app-screenshot.png`
3. Place it in: `src/assets/images/app-screenshot.png`

### Step 3: View Changes
- Refresh your website
- Screenshots will appear automatically
- If image is missing, placeholder icons will show instead

## 📐 Recommended Specifications

### Owner Dashboard Screenshot
- **Format:** PNG or JPG
- **Width:** 1200-1600px
- **Content:** Payments, bookings, analytics, or venue management screens
- **The screenshot you shared is perfect!** ✨

### Mobile App Screenshot
- **Format:** PNG
- **Dimensions:** 1170 x 2532px (iPhone aspect ratio)
- **Content:** Main booking screen, court listings, or search interface

## 🎨 Tips for Best Results

- **Clean the screenshot:** Remove any sensitive/demo data if needed
- **Optimize file size:** Use tools like TinyPNG to reduce file size
- **High quality:** Use actual screenshots, not mockups
- **Consistent branding:** Ensure screenshots match your brand colors

## 📁 File Structure

```
playda-website/
└── src/
    └── assets/
        └── images/
            ├── app-screenshot.png       ← Mobile app screenshot
            ├── owner-dashboard.png      ← Dashboard screenshot (payments)
            └── README.md
```

## ✨ What Happens Next

Once you add the screenshots:
1. The hero section will show your mobile app in a phone mockup
2. The owners section will display the dashboard screenshot with rounded corners and shadow
3. Both have automatic fallbacks if images are missing
4. Images are responsive and optimized for all screen sizes

---

**Need help?** The code automatically handles missing images with placeholder icons, so you can add screenshots whenever you're ready!
