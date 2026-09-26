import { useRef, useState } from 'react'
import { useModalFocus } from '../../hooks/useModalFocus.js'

function PhotoTour({ photos, onClose }) {
  const closeRef = useRef(null)
  const [selectedId, setSelectedId] = useState(photos[0]?.id)
  const selected = photos.find((photo) => photo.id === selectedId) ?? photos[0]
  useModalFocus({ active: true, initialFocusRef: closeRef, onEscape: onClose })
  return <section className="photo-tour" role="dialog" aria-modal="true" aria-labelledby="photo-tour-title">
    <header className="tour-header"><button className="tour-back-button" data-tour-focusable ref={closeRef} type="button" onClick={onClose} aria-label="Close photo tour"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 4-8 8 8 8" /></svg></button><h1 id="photo-tour-title">Photo tour</h1><div className="tour-actions"><button data-tour-focusable type="button" aria-label="Share this listing">&#8679;</button><button data-tour-focusable type="button" aria-label="Save this listing">&#9825;</button></div></header>
    <div className="tour-content"><nav className="tour-photo-nav" aria-label="Photo categories">{photos.map((photo) => <button aria-current={photo.id === selected.id ? 'true' : undefined} className="tour-thumbnail" data-tour-focusable key={photo.id} type="button" onClick={() => setSelectedId(photo.id)}><span className="tour-thumbnail-image"><img alt={photo.alt} src={photo.tourSource} style={{ transform: `translate(${photo.tourPosition})` }} /></span><span>{photo.label}</span></button>)}</nav>
      <article className="tour-selected-photo"><div className="tour-copy"><h2>{selected.label}</h2><p>Relax in a comfortable, thoughtfully appointed space.</p></div><div className="tour-large-image"><img alt={selected.alt} src={selected.tourSource} style={{ transform: 'translate(-991px, -654px)' }} /></div></article>
    </div>
  </section>
}
export default PhotoTour
