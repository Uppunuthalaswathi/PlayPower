function Lightbox({ activePhotoIndex, photos, onClose }) {
  return (
    <section aria-label="Photo viewer" aria-modal="true" role="dialog">
      <button type="button" onClick={onClose}>
        Close photo viewer
      </button>
      <p>
        Photo {activePhotoIndex + 1} of {photos.length}
      </p>
    </section>
  )
}

export default Lightbox
