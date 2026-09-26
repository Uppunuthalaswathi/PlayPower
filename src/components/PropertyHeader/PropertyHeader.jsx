function PropertyHeader({ property }) {
  return (
    <section className="property-header">
      <h1>{property.title}</h1>
      <div className="property-actions">
        <button type="button" aria-label="Share this listing"><span aria-hidden="true">⇧</span> Share</button>
        <button type="button" aria-label="Save this listing"><span aria-hidden="true">♡</span> Save</button>
      </div>
      <p className="property-meta"><span aria-hidden="true">★</span> {property.rating} · <u>{property.reviewCount} reviews</u> · <u>{property.location}</u></p>
    </section>
  )
}

export default PropertyHeader
