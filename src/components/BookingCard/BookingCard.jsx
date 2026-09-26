function BookingCard({ property }) {
  const total = property.pricePerNight * 2 + property.cleaningFee + property.serviceFee

  return (
    <aside className="booking-card" aria-label="Booking details">
      <p className="booking-price"><strong>₹{property.pricePerNight.toLocaleString('en-IN')}</strong> night</p>
      <div className="booking-inputs">
        <button type="button"><span>CHECK-IN</span><strong>Add date</strong></button>
        <button type="button"><span>CHECKOUT</span><strong>Add date</strong></button>
        <button className="guests-input" type="button"><span>GUESTS</span><strong>1 guest</strong><b aria-hidden="true">⌄</b></button>
      </div>
      <button className="reserve-button" type="button">Reserve</button>
      <p className="charge-note">You won't be charged yet</p>
      <div className="price-breakdown"><p><u>₹{property.pricePerNight.toLocaleString('en-IN')} × 2 nights</u><span>₹{(property.pricePerNight * 2).toLocaleString('en-IN')}</span></p><p><u>Cleaning fee</u><span>₹{property.cleaningFee.toLocaleString('en-IN')}</span></p><p><u>Service fee</u><span>₹{property.serviceFee.toLocaleString('en-IN')}</span></p><p className="total"><strong>Total before taxes</strong><strong>₹{total.toLocaleString('en-IN')}</strong></p></div>
    </aside>
  )
}

export default BookingCard
