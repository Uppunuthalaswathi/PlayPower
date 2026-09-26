# Reference Analysis - Blocked Pending Captures

## Inspection status

Phase 1 could not be completed accurately from this environment. The supplied reference URL, `https://airbnb-clone-umber-two.vercel.app`, is currently protected by a Vercel challenge and responds with `HTTP 429 Too Many Requests` (`X-Vercel-Mitigated: challenge`). The browser inspection tool also reports that the URL is inaccessible.

No layout values, colours, typography, assets, interactions, or animation timings have been inferred. Doing so would conflict with the requirement to use the reference as the source of truth.

## Required reference material

Please provide the following desktop captures at their original pixel dimensions, ideally from one browser session at a known zoom level (100% preferred). PNG screenshots are preferred; a short screen recording is needed for behaviour that screenshots cannot show.

### 1. Listing page - static states

1. A full-width screenshot of the listing page at the initial scroll position, including the complete header, property heading, hero gallery, beginning of the detail column, and booking card.
2. Full-page screenshots (or overlapping, unscaled viewport screenshots) continuing to the bottom of the listing. Include the host section, amenities/features, description, dividers, and all booking-card states visible while scrolling.
3. A screenshot with the pointer hovering each distinct interactive element that changes appearance: hero gallery image, **Show all photos**, share, save, search control, profile/menu controls, inputs, and reserve button.
4. A screenshot of a keyboard-focused representative control (including the visible focus indicator), plus any pressed/selected states.

### 2. Photo tour

1. The photo tour immediately after opening from **Show all photos**.
2. The photo tour after opening from a hero image, if that route differs.
3. A scrolled photo-tour position showing the gallery layout and the closing control in context.
4. Hover and keyboard-focus states for the close control and any image controls.

### 3. Lightbox / single-photo viewer

1. The lightbox immediately after opening a gallery image.
2. A lightbox image where both previous and next controls are available.
3. The first and last image states, to show disabled/hidden navigation behaviour.
4. Hover and keyboard-focus states for close, previous, and next controls.
5. Any counter, caption, thumbnail rail, or other controls, if present.

### 4. Behaviour recording and measurements

Provide a short (15-30 second) desktop recording that demonstrates:

- opening and closing the photo tour;
- opening the lightbox from a gallery image;
- previous/next controls and `ArrowLeft`/`ArrowRight` navigation;
- `Escape` closing behaviour;
- the visual transition for opening, closing, and changing images;
- focus destination after each open and close action;
- sticky-booking-card behaviour while the listing scrolls.

Also provide, if available:

- browser viewport width x height and browser zoom;
- any property image assets used by the reference, or permission to use suitable original/licensed substitutes;
- a URL/session that is accessible without the Vercel challenge.

## Analysis checklist (pending source access)

Once the reference can be inspected, this document will record only observed values for:

- overall viewport, content width, margins, and vertical rhythm;
- header dimensions, logo, search/navigation controls, icons, borders, and spacing;
- property title, metadata, rating, reviews, location, share, and save controls;
- hero gallery grid, image crop/dimensions, gaps, radii, hover state, and photo button;
- host/details/features/description structure and dividers;
- booking-card geometry, inputs, price, shadows, radius, and sticky behaviour;
- photo-tour layout, scroll behaviour, controls, background, and transitions;
- lightbox controls, counter, image sizing, keyboard behaviour, and transitions;
- typography, colours, motion, and observable accessibility semantics/focus states.
