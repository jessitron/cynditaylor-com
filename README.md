# Cyndi Taylor - Portrait Artist Website

cyndibot was here 2026-05-03

This is a static website for Cyndi Taylor, a professional portrait artist.

## Image Guidelines

### Target Image Sizes

To ensure optimal website performance while maintaining visual quality:

**Gallery Images (current implementation):**
- **Maximum size:** 1600px on the longest edge
- **Target file size:** 400-800 KB per image
- **Format:** JPEG
- **Why:** This provides excellent quality for modern displays (including 4K screens) while keeping page load times fast

**Future Enhancement - Gallery Thumbnails:**
- **Target size:** 800px on the longest edge
- **Target file size:** 150-300 KB per image
- **Use case:** For gallery grid display with click-through to full-size images

### Image Management

1. **Adding New Images:**
   - Resize images to 1600px max on the longest edge before committing
   - Optimize for web using 85-90% JPEG quality
   - Test file size - aim for under 800 KB per image

2. **Image Optimization:**
   - Use JPG format for photographs
   - Remove EXIF data except orientation
   - Consider using WebP format with JPG fallbacks for better performance in future

3. **Directory Structure:**
   - All images go in the `images/` directory
   - Keep original filenames when possible for tracking
   - HEIC files are automatically converted to JPG during email processing

## Image Placeholders

The website currently uses placeholder references for images. To complete the website setup, you'll need to add real images to the `images` directory:

1. **Required Images:**
   - `images/hero-bg.jpg` - A large, high-quality image for the homepage hero section (recommended size: 1920x1080px)
   - `images/artist-portrait.jpg` - A portrait photo of Cyndi Taylor for the About page
   - `images/placeholder-1.jpg` through `images/placeholder-8.jpg` - Portfolio images for the gallery
   
## Customization

To customize the website for Cyndi Taylor:

1. **Content Updates:**
   - Update the artist bio in `about.html`
   - Add real testimonials in `index.html`
   - Update contact information in `contact.html`
   - Add social media links throughout the site

2. **Design Customization:**
   - Modify color scheme in `css/styles.css` by changing the CSS variables in the `:root` selector
   - Adjust typography as needed
   - Customize the layout to better showcase Cyndi's specific style of artwork

## Form Handling

The contact form in `contact.html` is currently set up for demonstration purposes only. To make it functional:

1. Set up a form handling service like Formspree, Netlify Forms, or a custom backend
2. Update the form's action attribute in `contact.html`
3. Modify the form submission handling in `js/main.js`

## Deployment

This static website can be deployed to any web hosting service:

1. Upload all files maintaining the directory structure
2. Ensure the server is configured to serve `index.html` as the default page

## Browser Compatibility

The website is designed to be responsive and compatible with modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
