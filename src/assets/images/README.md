# App Screenshots

## How to Add Your App Screenshots

1. **Take screenshots** of your Playda app (preferably iPhone screenshots for best results)

2. **Recommended screenshot specifications:**
   - **Format:** PNG or JPG
   - **Dimensions:** 1170 x 2532 pixels (iPhone 14 Pro) or similar aspect ratio
   - **File size:** Optimize to < 500KB for faster loading
   - **Content:** Show the main booking screen, court listings, or key features

3. **Add your screenshot:**
   - Save your screenshot as `app-screenshot.png` in this folder
   - Or use a different name and update the path in `src/pages/Home.jsx` line 82

4. **Optional: Add multiple screenshots:**
   - You can add more screenshots like:
     - `app-screenshot-1.png` (Home/Browse screen)
     - `app-screenshot-2.png` (Booking screen)
     - `app-screenshot-3.png` (Profile/Bookings screen)

## Current Screenshot Usage

- **Hero Section (App Screenshot):** `/src/assets/images/app-screenshot.png`
  - Used in: `src/pages/Home.jsx` (line 82)
  - Displays in the phone mockup on the homepage
  - Recommended: iPhone screenshot of the main app screen

- **Owners Section (Dashboard Screenshot):** `/src/assets/images/owner-dashboard.png`
  - Used in: `src/pages/Home.jsx` (line 177)
  - Displays the owner dashboard/payments screen
  - Recommended: Desktop screenshot (1200-1600px wide) showing payments, bookings, or analytics

## Tips for Best Results

- Use actual app screenshots from your iOS device
- Ensure screenshots show the app in a clean state (no sensitive data)
- Consider using screenshots that highlight key features
- Optimize images before adding (use tools like TinyPNG or ImageOptim)
- For transparent backgrounds, use PNG format
- For photos/complex images, JPG is fine

## Example File Structure

```
src/assets/images/
├── app-screenshot.png          (Main hero screenshot - mobile app)
├── owner-dashboard.png         (Owner dashboard screenshot - payments/analytics)
├── app-screenshot-booking.png  (Optional: Booking flow)
├── app-screenshot-courts.png   (Optional: Court listings)
└── README.md                   (This file)
```

## Quick Start

1. Save the payment dashboard screenshot as `owner-dashboard.png` in this folder
2. Save your mobile app screenshot as `app-screenshot.png` in this folder
3. Refresh your website to see the changes!
