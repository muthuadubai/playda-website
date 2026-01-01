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

- **Hero Section:** `/src/assets/images/app-screenshot.png`
  - Used in: `src/pages/Home.jsx` (line 82)
  - Displays in the phone mockup on the homepage

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
├── app-screenshot.png          (Main hero screenshot)
├── app-screenshot-booking.png  (Optional: Booking flow)
├── app-screenshot-courts.png   (Optional: Court listings)
└── README.md                   (This file)
```
