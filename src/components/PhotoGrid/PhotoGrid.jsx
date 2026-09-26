function PhotoGrid({ photos, onOpenPhotoTour }) {
  return <section className="photo-grid" aria-label="Property photos">
    {photos.filter((photo) => photo.isHeroPhoto).map((photo, index) => <button className={`photo-tile photo-${index + 1}`} key={photo.id} type="button" aria-label={`View ${photo.alt}`} style={{ backgroundImage: `url(${photo.heroSource})`, backgroundPosition: photo.listingPosition }} />)}
    <button className="show-photos-button" type="button" onClick={onOpenPhotoTour}><span aria-hidden="true">&#10300;</span> Show all photos</button>
  </section>
}
export default PhotoGrid
