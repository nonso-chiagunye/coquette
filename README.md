# Coquette Services - Website Documentation

## Project Overview

This is a professional, production-ready corporate website for **Coquette Services**, a leading provider of supply, procurement, industrial facility services, and industrial cleaning solutions for various industries including Oil & Gas, Manufacturing, Construction, Power & Energy, Commercial Facilities, and Government sectors.

## Website Features

### ✅ Complete Pages

- **Home (index.html)** - Hero section, value propositions, core services, industries served, CTAs
- **About Us (about.html)** - Company story, mission & vision, core values, compliance & certifications
- **Services (services.html)** - Five comprehensive service sections with detailed descriptions
- **Industries (industries.html)** - Six industry-specific solutions with tailored approaches
- **Contact Us (contact.html)** - Interactive contact form, location info, response time guarantees, FAQs

### 🎨 Design & UX

- **Modern Industrial Aesthetic** - Dark blue, grey, white with orange accents
- **Fully Responsive** - Desktop, tablet, and mobile optimized
- **Professional Typography** - Clean sans-serif fonts for corporate appeal
- **Smooth Animations** - Subtle hover effects and scroll animations
- **Accessibility** - Semantic HTML, proper contrast ratios, alt text support
- **SEO-Friendly** - Proper heading hierarchy, meta descriptions, structured content

### 🔧 Technical Features

- **Vanilla JavaScript** - No framework dependencies (lightweight and fast)
- **Mobile Navigation** - Hamburger menu for responsive design
- **Form Validation** - Client-side validation with user feedback
- **Interactive Elements** - Smooth scroll, active navigation highlighting, animations
- **Browser Compatibility** - Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## Directory Structure

```
website/
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── industries.html         # Industries page
├── contact.html            # Contact Us page
├── css/
│   └── styles.css          # Main stylesheet (1000+ lines)
├── js/
│   └── main.js             # JavaScript functionality
└── assets/
    └── images/             # Image placeholder directory
```

## File Descriptions

### HTML Files (5 pages)

- **index.html** (300+ lines)
  - Hero section with headline and CTA buttons
  - Six value proposition cards
  - Four core service cards
  - Six industry cards
  - Dark section with partnership CTA
  - Full footer with contact info

- **about.html** (280+ lines)
  - Breadcrumb navigation
  - Company story section
  - Mission & vision statement cards
  - Six core values with icons
  - Certifications and standards section
  - Team expertise showcase

- **services.html** (400+ lines)
  - Five detailed service sections:
    1. Supply & Procurement Services
    2. Technical & Industrial Supplies
    3. Procurement & Vendor Management
    4. Facility & Building Maintenance
    5. Industrial Cleaning Services
  - Additional benefits section
  - Each service with key highlights and CTAs

- **industries.html** (380+ lines)
  - Six industry-specific solutions:
    1. Oil & Gas
    2. Manufacturing
    3. Construction
    4. Power & Energy
    5. Commercial Facilities
    6. Government & Infrastructure
  - Industry statistics
  - Proven track record section

- **contact.html** (350+ lines)
  - Contact form with validation
  - Company contact information (phone, email, location)
  - Quick access buttons
  - Service areas section
  - Response time guarantees
  - FAQ section with common questions

### CSS (styles.css - 1000+ lines)

- **Root Variables** - Color system and design tokens
- **Typography** - Heading and paragraph styles
- **Components** - Buttons, cards, forms, badges
- **Layout** - Container, sections, grids
- **Header & Navigation** - Sticky header, responsive menu
- **Animations** - Smooth transitions and keyframe animations
- **Responsive Breakpoints** - Mobile (480px), tablet (768px), desktop
- **Utility Classes** - Spacing, text alignment, colors
- **Dark Mode Support** - Dark background section styling

### JavaScript (main.js - 200+ lines)

- **Mobile Navigation Toggle** - Hamburger menu functionality
- **Active Link Highlighting** - Current page indicator
- **Form Handling** - Validation and submission
- **Notifications** - Success/error message display
- **Scroll Animations** - Intersection Observer for card animations
- **Smooth Scrolling** - Anchor link smooth scroll behavior

## Key Features Explained

### 1. Modern Design System

```css
--primary-dark: #0f3b5b /* Deep blue - professional */ --accent-orange: #ff8c42
  /* Orange - energy & reliability */ --neutral-light: #ecf0f1
  /* Light grey - clean background */;
```

### 2. Responsive Grid System

Uses CSS Grid with `auto-fit` for automatic responsive columns:

```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

### 3. Form Validation

- Email format validation (regex pattern)
- Phone number validation
- Required field checking
- User-friendly error messages

### 4. Mobile-First Design

- Navigation toggle for devices under 768px
- Stacked layout for smaller screens
- Touch-friendly button sizes
- Readable font sizes on all devices

## How to Use

### Opening the Website

1. Extract all files to a folder
2. Open `index.html` in any web browser
3. Navigation menu at top allows access to all pages
4. Mobile users: Click hamburger icon (☰) to open menu

### Customization Guide

#### Change Company Name

Replace "Dominion City" with your company name in:

- `index.html` - Logo and header
- `about.html`, `services.html`, etc. - Throughout all pages
- `css/styles.css` - Footer branding

#### Change Contact Information

Edit in all HTML files:

```html
<a href="tel:+1-800-DOMINION">(800) 366-6466</a>
<a href="mailto:info@dominioncity.com">info@dominioncity.com</a>
123 Industrial Boulevard, Houston, TX 77002
```

#### Update Colors

Edit in `css/styles.css`:

```css
:root {
  --primary-dark: #0f3b5b; /* Change this */
  --accent-orange: #ff8c42; /* And this */
  /* ... rest of colors */
}
```

#### Add/Remove Services

1. Open `services.html`
2. Duplicate a service section
3. Update the heading, description, and features
4. Update the service ID for anchor links

#### Add Industry

1. Open `industries.html`
2. Add new grid item with industry card
3. Create dedicated industry section if needed
4. Update industry list on home page

#### Change Form Fields

1. Open `contact.html`
2. Add new `<div class="form-group">` elements
3. Update form validation in `js/main.js` if needed
4. Customize the subject dropdown options

### Adding Images

Place images in `assets/images/` folder and reference:

```html
<img src="assets/images/your-image.jpg" alt="Description" />
```

### Extending Functionality

#### Add New Page

1. Create new HTML file (e.g., `certifications.html`)
2. Copy header and footer from existing page
3. Add to navigation menu in all pages
4. Create content using existing card and section styles

#### Add Blog Section

1. Create `blog.html` and blog post templates
2. Use the same CSS classes for consistency
3. Add blog link to main navigation
4. Consider adding pagination or category filters

#### Add Testimonials

Add testimonial section using similar card structure:

```html
<section class="section light-bg">
  <h2>Client Testimonials</h2>
  <!-- Testimonial cards here -->
</section>
```

## Performance Optimization

- **Lightweight** - No external frameworks or dependencies
- **Fast Load** - Minimal CSS and JavaScript
- **Smooth Animations** - GPU-accelerated transforms
- **Mobile Optimized** - Responsive design reduces need for redirects
- **SEO Ready** - Proper semantic HTML and meta tags

## Browser Support

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 elements
- Proper heading hierarchy (H1 → H5)
- Color contrast meets WCAG standards
- Form labels properly associated with inputs
- Keyboard navigation support
- Alt text support for images

## SEO Features

- Descriptive meta tags on each page
- Proper heading hierarchy
- Semantic HTML markup
- Mobile-responsive design
- Fast load times
- Structured internal linking

## Common Tasks

### Change Logo

Replace the logo-icon text "DC" in header:

```html
<div class="logo-icon">DC</div>
<!-- Change DC to your initials -->
```

### Update Service Descriptions

Find service sections and update content:

- Short descriptions
- Key benefits bullets
- Industries served

### Add Analytics

Add Google Analytics or similar in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Setup Contact Form Backend

Currently form shows success message. To enable email:

1. Create backend endpoint (Node.js, PHP, etc.)
2. Update form submission in `js/main.js`
3. Handle form data server-side
4. Send confirmation email

Example endpoint integration:

```javascript
fetch("/api/contact", {
  method: "POST",
  body: JSON.stringify(formData),
});
```

## Maintenance

### Regular Updates

- Update service descriptions quarterly
- Review and update client testimonials
- Check all links for dead links
- Update certifications when renewed
- Refresh industry-specific content

### Analytics

- Track page views and user flow
- Monitor form conversion rates
- Identify popular content
- Track bounce rates
- Monitor mobile vs desktop traffic

## Deployment

### Simple Upload (Static Hosting)

1. All files are static HTML/CSS/JS
2. No backend required
3. Upload entire folder to any web host
4. Works with: GitHub Pages, Netlify, Vercel, S3, etc.

### Recommended Hosting

- **Netlify** - Easy deployment from GitHub
- **Vercel** - Optimized for static sites
- **AWS S3 + CloudFront** - Scalable enterprise solution
- **Traditional Web Hosting** - cPanel, etc.

## Support & Future Development

### Potential Enhancements

- CMS integration (WordPress, Contentful)
- E-commerce functionality
- Client portal
- Project portfolio showcase
- Team member bios with photos
- Video integration
- Live chat support
- Newsletter signup
- Social media integration

### Mobile App

Consider developing corresponding mobile app for:

- Push notifications
- Offline access to service information
- Direct contact options
- Service request submissions

## License & Usage

This website template is created for **Coquette Services** and contains:

- Professional design and layout
- Responsive functionality
- Production-ready code
- All assets and components

## Contact Information

For questions about this website:

- Phone: (800) 366-6466
- Email: info@coquetteservices.com
- Address: Ajman Free Zone, Ajman UAE

---

**Website Version:** 1.0  
**Last Updated:** January 26, 2026  
**Status:** Production Ready ✅
