function PropertyInfo({ property }) {
  return (
    <article className="property-info">
      <section className="host-summary">
        <div><h2>Entire rental unit hosted by {property.host.name}</h2><p>{property.summary.join(' · ')}</p></div>
        <div className="host-avatar" aria-hidden="true">M</div>
      </section>
      <section className="feature-list" aria-label="Property highlights">
        {property.features.map((feature) => <div className="feature" key={feature.title}><span aria-hidden="true">◇</span><div><h3>{feature.title}</h3><p>{feature.detail}</p></div></div>)}
      </section>
      <section className="description"><p>{property.description}</p><button type="button">Show more <span aria-hidden="true">›</span></button></section>
      <section className="amenities"><h2>What this place offers</h2><div>{property.amenities.map((amenity) => <p key={amenity}><span aria-hidden="true">✓</span>{amenity}</p>)}</div><button type="button">Show all amenities</button></section>
    </article>
  )
}

export default PropertyInfo
