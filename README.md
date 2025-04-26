# Cyndi Taylor - Portrait Artist Website

This is a static website for Cyndi Taylor, a professional portrait artist.

## Image Placeholders

The website currently uses placeholder references for images. To complete the website setup, you'll need to add real images to the `images` directory:

1. **Required Images:**
   - `images/hero-bg.jpg` - A large, high-quality image for the homepage hero section (recommended size: 1920x1080px)
   - `images/artist-portrait.jpg` - A portrait photo of Cyndi Taylor for the About page
   - `images/placeholder-1.jpg` through `images/placeholder-8.jpg` - Portfolio images for the gallery
   
2. **Image Optimization:**
   - Optimize all images for web to ensure fast loading times
   - Use JPG format for photographs
   - Consider using WebP format with JPG fallbacks for better performance

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
