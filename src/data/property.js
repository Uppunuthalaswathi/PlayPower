import listingCapture from '../../docs/reference/01-listing-page.png.png'
import photoTourCapture from '../../docs/reference/02-photo-tour.png.png'

const photoRecords = [
  ['living-room-1', 'Living room 1', 'Living room with dining table and seating', '-120px -260px', '-215px -131px'], ['living-room-2', 'Living room 2', 'Outdoor lounge with woven chairs', '-961px -260px', '-400px -131px'], ['kitchen', 'Full kitchen', 'Warm wood kitchen with dark tiled backsplash', '-1375px -260px', '-585px -131px'], ['bedroom', 'Bedroom', 'Bedroom with a double bed and balcony door', '-961px -632px', '-770px -131px'], ['bathroom', 'Full bathroom', 'Bathroom with a walk-in shower', '-1375px -632px', '-956px -131px'], ['gym', 'Gym', 'Gym with exercise equipment', '', '-1141px -131px'], ['exterior', 'Exterior', 'Exterior view of the apartment building', '', '-1326px -131px'], ['pool', 'Pool', 'Outdoor swimming pool in the apartment complex', '', '-1512px -131px'], ['additional', 'Additional photos', 'Jacuzzi area with outdoor seating', '', '-215px -346px'],
]

export const property = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10', location: 'Candolim, Goa, India', rating: 4.96, reviewCount: 54, host: { name: 'Mirashya', yearsHosting: 2 }, summary: ['2 guests', '1 bedroom', '1 bed', '1 bathroom'], pricePerNight: 7549, cleaningFee: 650, serviceFee: 1072,
  description: 'Unwind in a warm, private retreat with a relaxing jacuzzi and thoughtful details for a comfortable stay.', features: [{ detail: 'Check yourself in with the keypad.', title: 'Self check-in' }, { detail: 'A peaceful base close to Candolim.', title: 'Great location' }, { detail: 'A room with wifi that is well-suited for working.', title: 'Dedicated workspace' }], amenities: ['Kitchen', 'Wifi', 'Free parking on premises', 'Air conditioning'],
  photos: photoRecords.map(([id, label, alt, listingPosition, tourPosition], index) => ({ id, label, alt, listingPosition, tourPosition, heroSource: listingCapture, tourSource: photoTourCapture, isHeroPhoto: index < 5 })),
}
