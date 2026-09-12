# Breakpoint Pro Wrestling (BPW)

## Description

Breakpoint Pro Wrestling is a fictional professional wrestling promotion website created as the final project for the Web Integration course.

The website presents the BPW brand through five pages:

- Home
- Roster
- Events
- Championships
- Academy

The visual identity is inspired by my passion for professional wrestling and sports broadcasting, using a dark color palette with red accents, large typography, wrestler photography, event graphics and interactive elements.

The website is responsive and uses a 12-column Tailwind CSS grid system to adapt its content to different screen sizes.

Do note that every wrestler figuring in this website has accepted and provided the pictures seen depicting them.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- BEM naming methodology
- Progressive Web App (PWA)
- Service Worker
- Cache API
- Web App Manifest
- Git / GitHub
- GitHub Pages

---

## Tailwind Components

The website uses Tailwind CSS alongside custom BEM styling. Three reusable interface components were adapted from Flowbite's Tailwind CSS component examples and customized to fit the visual identity of Breakpoint Pro Wrestling.

### 1. Navigation Bar

**Used on:** All five pages.

The main navigation bar was adapted from the Flowbite Navbar component. Tailwind flexbox utilities such as `flex`, `items-center`, `justify-between`, and `gap-8` are used to structure the navigation while BPW's custom BEM classes control its branding, colors, typography and responsive behavior.

Original component:
https://flowbite.com/docs/components/navbar/

### 2. Card

**Used on:**

- Homepage: news cards
- Roster page: wrestler cards
- Events page: upcoming and past event cards
- Academy page: training cards

The card component was adapted from the Flowbite Card component and reused for different types of content throughout the website. Tailwind utilities including responsive column classes, `h-full`, `overflow-hidden`, and spacing utilities are combined with custom BEM classes to create the different BPW card variations.

Original component:
https://flowbite.com/docs/components/card/

### 3. Button

**Used on:**

- Homepage: call-to-action buttons
- Events page: event card and results buttons
- Academy page: application submit button

The button component was adapted from the Flowbite Button component. Tailwind utilities including `inline-block`, `px-6`, `py-3`, `font-bold`, and `uppercase` provide the base button structure, while custom BPW classes provide the site's colors, borders, hover effects and visual identity.

Original component:
https://flowbite.com/docs/components/buttons/

---

## CSS Animations

The website contains multiple custom CSS animations.

### 1. `ticker-scroll`

Used for the BPW live ticker. The animation continuously moves information across the screen to reproduce the appearance of a television sports/news ticker. The coding came from multiple source research adapted to the needs of the website

### 2. `ember-float`

Used for decorative ember particles. Elements move vertically to create subtle atmospheric movement in the interface when a card is hovered.

### 3. `ember-float-high`

The second part of the ember animation. A variation of the initial animation with a different movement range. It creates additional visual variation and prevents the particle effect from appearing uniform.

The animations were created specifically for the BPW project using CSS `@keyframes`.

References:
https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
https://developer.mozilla.org/en-US/docs/Web/CSS/animation

---

## Progressive Web App (PWA)

Breakpoint Pro Wrestling is configured as a Progressive Web App.

The project includes:

- `manifest.json`
- BPW application name and short name
- Application description
- Theme and background colors
- Standalone display mode
- Start URL and application scope
- 144x144 maskable icon
- 192x192 maskable icon
- 512x512 maskable icon
- Application screenshot
- Service Worker
- Cached application resources
- Offline access

The Service Worker caches the main pages, stylesheets, JavaScript files, application icons and important image assets. Cached resources allow the website to remain usable when the browser is offline.

---

## Form Validation

The BPW Academy page contains an application form with custom JavaScript validation.

Default browser HTML5 validation is disabled with the `novalidate` attribute so that validation can be handled by JavaScript.

The form verifies required information and displays custom error messages when submitted information is invalid or incomplete.

---

## Accessibility

Accessibility considerations include:

- Semantic HTML5 elements
- Alternative text for meaningful images
- Labels associated with form controls
- ARIA attributes where appropriate
- Keyboard-accessible interactive elements
- Responsive layouts
- Appropriate heading structure

The HTML pages were also tested using the W3C HTML validator.

---

## Artificial Intelligence

Generative AI tools were used during development as an assistance and debugging tool.

AI assistance was used for tasks including:

- Personnal organizer (Agenda, task prioritizer, deadlines)
- Debugging complex HTML, CSS and JavaScript by the end of conception
- Explaining validation errors when needed
- Improving accessibility and semantic HTML
- Troubleshooting the PWA and Service Worker
- Second opinion on responsive behaviors
- Assisting with code visual organization

The project's visual direction, structure, content, implementation decisions and final integration were developed and reviewed by me as part of the project.

---

## Repository

GitHub repository:

[ADD GITHUB REPOSITORY URL HERE]

## Live Website

GitHub Pages:

[ADD GITHUB PAGES URL HERE]

---

## Author

Shawn Larochelle
Cégep de Trois-Rivières
Web Integration Final Project  
2026
