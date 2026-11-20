# Moonis Tirmizi — Personal Portfolio

A responsive, accessible student portfolio built for COP 3835. 

## Features
- Five sections: Home, About, Skills, Projects, Contact
- Mobile-first CSS, Flexbox, Grid, mobile dropdown with `aria-expanded`
- Keyboard focus states, skip link, semantic landmarks, labeled fields
- JavaScript project gallery, category filters, theme toggle, local form validation
- Array of project objects with `JSON.stringify()` and `JSON.parse()`
- Compressed JPG assets, lazy-loaded project images, SEO meta description

## Technologies
HTML5, CSS3, JavaScript, Git, GitHub Pages.

## Local usage
Open `index.html` in a browser. No build tools required. Contact form is a local demonstration only and **does not send messages**.

## GitHub links 
GitHub Repository URL: https://github.com/MoonisTirmizi/MoonisTirmizi.github.io
Published Website URL: https://MoonisTirmizi.github.io/

Replace `MoonisTirmizi` everywhere with your actual GitHub username. The required repository name is exactly `username.github.io`. Do not submit placeholder URLs.

## Testing and documentation
See `documentation/performance_report.pdf` and `documentation/usability_testing.pdf`. These are **worksheets, not completed test evidence**. Run real Lighthouse and cross-browser tests and conduct a real usability test, then replace pending fields before submission.

## Publishing
1. Create a public `MoonisTirmizi.github.io` repository.
2. Upload the contents of this folder with `index.html` in the repository root.
3. Make at least five meaningful commits for actual changes.
4. In Settings > Pages, select Deploy from a branch, `main`, `/(root)`.
5. Verify the public URL, test mobile/tablet/desktop, and update both URL files.
6. Zip the final folder and submit one ZIP in Canvas, with both full URLs also in submission comments.
7. ## Website Testing Results

I tested my portfolio website using Google Chrome and Microsoft Edge. The homepage, navigation links, project gallery, contact form, and theme toggle worked correctly.

### Responsive Design Testing
- Mobile (375px): The mobile menu opened and the navigation links worked.
- Tablet (768px): The website displayed correctly.
- Desktop (1280px): The navigation, text, and images displayed correctly.

### Interactive Features
- Dark/light theme toggle: Passed.
- Contact form required-field validation: Passed.
- Contact form success feedback: Passed.
- Mobile navigation dropdown: Passed.

Published website: https://moonistirmizi.github.io/
## Project Gallery
## Accessibility Features

My portfolio uses semantic HTML elements, descriptive headings, and labeled form fields to make the website easier to navigate.

The website includes a skip-to-content link, visible keyboard focus indicators, and a responsive mobile navigation menu. Images include alternative text descriptions.

The contact form provides validation feedback, and the layout adjusts to different screen sizes.

My portfolio includes three featured project examples that demonstrate web development, interface design, and cybersecurity interests.

The project gallery is generated dynamically using JavaScript. Visitors can browse the project cards and use category filters to explore different types of work.

Each project includes a description and a JPG image. The gallery uses CSS Grid to adjust its layout for mobile, tablet, and desktop screens.
WEBSITE TESTING COMPLETED - November 20, 2026

[PASS] Homepage loads in Google Chrome
[PASS] Homepage loads in Microsoft Edge
[PASS] Navigation links work
[PASS] Mobile menu opens and navigates correctly at 375px
[PASS] Tablet layout checked at 768px
[PASS] Desktop layout checked at 1280px
[PASS] Dark/light theme toggle works
[PASS] Contact form required-field validation works
[PASS] Contact form success feedback works
[PASS] Project gallery displays in Microsoft Edge

STILL REQUIRED:
[ ] Complete Lighthouse audit and performance report
[ ] Conduct usability test with one person and complete report
[ ] Verify five meaningful commits
[ ] Update final ZIP with latest files
[ ] Submit ZIP and both URLs through Canvas
