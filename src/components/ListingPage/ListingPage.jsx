import BookingCard from '../BookingCard/BookingCard.jsx'
import PhotoGrid from '../PhotoGrid/PhotoGrid.jsx'
import PropertyHeader from '../PropertyHeader/PropertyHeader.jsx'
import PropertyInfo from '../PropertyInfo/PropertyInfo.jsx'

function ListingPage({ property, onOpenPhotoTour }) {
  return (
    <section id="listing" className="listing-page">
      <PropertyHeader property={property} />
      <PhotoGrid photos={property.photos} onOpenPhotoTour={onOpenPhotoTour} />
      <div className="listing-columns">
        <PropertyInfo property={property} />
        <BookingCard property={property} />
      </div>
    </section>
  )
}

export default ListingPage
