'use client'

import { HeroSection } from '../components/HeroSection'
import { ManifestoSection } from '../components/ManifestoSection'
import { FeaturedCollectionSection } from '../components/FeaturedCollectionSection'
import { MeetNoxSection } from '../components/MeetNoxSection'
import { CommunitySection } from '../components/CommunitySection'
import { Footer } from '../components/Footer'

export default function App() {
  const handleExploreClick = () => {
    const manifestoSection = document.getElementById('manifesto')
    if (manifestoSection) {
      manifestoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }

  return (
    <div className="min-h-screen">
      <HeroSection onExploreClick={handleExploreClick} />
      <ManifestoSection />
      <FeaturedCollectionSection />
      <MeetNoxSection />
      <CommunitySection />
      <Footer />
    </div>
  )
}