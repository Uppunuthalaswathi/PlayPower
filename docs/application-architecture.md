# Application Architecture

## Scope and design choices

This is a desktop-only, client-rendered React application. It uses local, static property data because the assignment does not require a backend. React state and the browser platform provide the needed behaviour; no state-management, routing, or modal libraries are required.

The visual implementation will be based only on measurements collected from the accessible reference material. The current reference-analysis document records that those measurements are pending because the supplied site is unavailable from this environment.

## Component tree

```text
App
|- Header
|- ListingPage
|  |- PropertyHeader
|  |- PhotoGrid
|  |- PropertyInfo
|  `- BookingCard
|- PhotoTour (conditional dialog)
|  `- TourPhotoList
`- Lightbox (conditional dialog)
   |- PhotoViewer
   `- PhotoNavigation
```

`App` owns view state and passes small event callbacks down. Listing components receive property data and do not own global modal state. `PhotoTour` and `Lightbox` are rendered only while active and remain separate so each can have its own semantic dialog, layout, focus setup, and closing behaviour.

## State management

One `useReducer` in `App` will model the complete overlay state:

```text
{ view: 'listing' | 'photoTour' | 'lightbox', activePhotoIndex: number }
```

Planned actions:

- `OPEN_TOUR`
- `OPEN_LIGHTBOX(index)`
- `CLOSE_OVERLAY`
- `SHOW_PREVIOUS_PHOTO`
- `SHOW_NEXT_PHOTO`

The reducer will clamp or wrap photo navigation according to the observed reference behaviour. Event handlers will be named for user intent (`onOpenTour`, `onOpenLightbox`, `onClose`, `onPrevious`, `onNext`) rather than exposing reducer details to presentation components. A `ref` to the opening control will be captured when an overlay opens and restored on close.

## Data flow

`src/data/property.js` exports a single structured property object with title, host, location, rating, review count, amenities, description, price, and ordered photo records. `App` imports this object once and distributes the relevant slices as props.

```text
property data -> App -> ListingPage / PhotoTour / Lightbox
user event -> callback -> App reducer -> updated overlay/photo props -> rendered view
```

Image order is defined only in the data module. Both gallery components use the same ordered `photos` list, which guarantees that an image opened from the grid maps to the correct lightbox position.

## Modal flow

```text
Listing
  |-- Show all photos --> Photo Tour
  |-- hero/tour photo --> Lightbox (with selected photo index)
  `-- Escape (when no overlay) --> no action

Photo Tour -- close / Escape --> Listing
Photo Tour -- select photo --> Lightbox
Lightbox -- close / Escape --> previous view (Photo Tour or Listing)
```

Before implementation, the final return route will be verified against the reference. If the reference treats a lightbox opened from the tour differently from one opened from the listing, an additional `origin` field will be added to the reducer state; it will not be duplicated across components.

## Photo navigation flow

`Lightbox` receives `activePhotoIndex`, `photoCount`, `onPrevious`, and `onNext`. Button clicks and a single document-level key handler both dispatch the same previous/next actions. The key handler is enabled only while the lightbox is open:

```text
ArrowLeft  -> SHOW_PREVIOUS_PHOTO
ArrowRight -> SHOW_NEXT_PHOTO
Escape     -> CLOSE_OVERLAY
```

This keeps interactions deterministic and straightforward to test without relying on visual event paths.

## Accessibility strategy

- Use native `button` elements for every actionable control, with descriptive `aria-label`s where text is not visible.
- Provide meaningful `alt` text for property photographs; use empty alt text only for decorative images.
- Model Photo Tour and Lightbox as modal dialogs with `role="dialog"`, `aria-modal="true"`, and an accessible title or label.
- Move focus into an overlay on open, keep Tab focus within it, and restore focus to the originating trigger when it closes.
- Support Escape to close the active overlay and preserve visible focus indicators.
- Make all gallery images keyboard-operable via buttons rather than click handlers on non-interactive elements.
- Keep keyboard event handling scoped to active overlays and clean up listeners on unmount.
- Respect reduced-motion preferences by reducing non-essential transitions.

## Folder structure

```text
src/
  components/
    BookingCard/
      BookingCard.jsx
    Header/
      Header.jsx
    Lightbox/
      Lightbox.jsx
    PhotoGrid/
      PhotoGrid.jsx
    PhotoTour/
      PhotoTour.jsx
    PropertyHeader/
      PropertyHeader.jsx
    PropertyInfo/
      PropertyInfo.jsx
  data/
    property.js
  hooks/
    useModalFocus.js
  App.jsx
  App.css
  main.jsx
  index.css
```

The components are intentionally colocated by responsibility. `hooks/useModalFocus.js` will encapsulate focus capture, restoration, and trapping when overlays are implemented, leaving Photo Tour and Lightbox responsible for their own markup and controls.
