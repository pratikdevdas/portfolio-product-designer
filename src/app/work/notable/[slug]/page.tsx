import React from 'react'
import Hero from './components/Hero'
import SectionBelowHero from './components/SectionBelowHero'
import SectionImageLeft from './components/SectionImageLeft'
import SectionImageRight from './components/SectionImageRight'
import MultiMobileContainer from './components/MultiMobileContainer'
import SimilarCards from './components/SimilarCards'
import data from '../../data'

const page = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug)

  const dataToDisplay = data.find((f) => f.id === params.slug)
  if (!dataToDisplay) {
    return <></>
  }
  const pageElements = dataToDisplay.pageElements

  return (
    <div>
      <Hero title={dataToDisplay.title}>{pageElements}</Hero>
      <SectionBelowHero pageElements={pageElements} />
      <SectionImageLeft
        id={dataToDisplay.id}
        heading={pageElements.sectionOne.heading}
        headingSpan={pageElements.sectionOne.headerSpan}
        description={pageElements.sectionOne.description}
        imageUrl={pageElements.sectionOne.imageUrl}
        imageAlt={pageElements.sectionOne.imageAlt}
      />
      <SectionImageRight
        id={dataToDisplay.id}
        heading={pageElements.sectionTwo.heading}
        headingSpan={pageElements.sectionTwo.headerSpan}
        description={pageElements.sectionTwo.description}
        imageUrl={pageElements.sectionTwo.imageUrl}
        imageAlt={pageElements.sectionTwo.imageAlt}
      />
      <SectionImageLeft
        id={dataToDisplay.id}
        heading={pageElements.sectionThree.heading}
        headingSpan={pageElements.sectionThree.headerSpan}
        description={pageElements.sectionThree.description}
        imageUrl={pageElements.sectionThree.imageUrl}
        imageAlt={pageElements.sectionThree.imageAlt}
      />
      <MultiMobileContainer />
      <SimilarCards />
    </div>
  )
}

export default page
