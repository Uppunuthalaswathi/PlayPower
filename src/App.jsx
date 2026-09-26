import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import ListingPage from './components/ListingPage/ListingPage.jsx'
import PhotoTour from './components/PhotoTour/PhotoTour.jsx'
import { property } from './data/property.js'
import './App.css'

function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false)
  return (
    <main className="app-shell">
      {isPhotoTourOpen ? <PhotoTour photos={property.photos} onClose={() => setIsPhotoTourOpen(false)} /> : <><Header /><ListingPage property={property} onOpenPhotoTour={() => setIsPhotoTourOpen(true)} /></>}
    </main>
  )
}

export default App
