import React from 'react'
import Navbar from '@/components/navbar'
import Hero from './components/Hero'
import SectionImageRight from './components/SectionImageRight'
import SectionImageLeft from './components/SectionImageLeft'
import SectionBelowHero from './components/SectionBelowHero'
import MultiMobileContainer from './components/MultiMobileContainer'
import SimilarCards from './components/SimilarCards'
import Footer from '@/components/footer'

const WorkSlug = ({ params }: { children: React.ReactNode, params: { slug: string } }) => {
  console.log( params)
  return (
    <div>
      <div className="bg-[#F8F7F2] pb-[488px]">
        <Navbar />
        <Hero />
        <SectionBelowHero />
        <SectionImageLeft />
        <SectionImageRight />
        <SectionImageLeft />
        <MultiMobileContainer />
        <SimilarCards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default WorkSlug
