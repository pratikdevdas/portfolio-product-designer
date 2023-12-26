import React from 'react'
import Hero from './components/Hero'
import SectionBelowHero from './components/SectionBelowHero'
import SectionImageLeft from './components/SectionImageLeft'
import SectionImageRight from './components/SectionImageRight'
import MultiMobileContainer from './components/MultiMobileContainer'
import SimilarCards from './components/SimilarCards'
import data, { NotableMention } from '../../data'

const page = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug)

  const dataToDisplay = data.find((f) => f.id === params.slug)
  if (!dataToDisplay) {
    return <></>
  }

  return (
    <div>
      <Hero
        title={dataToDisplay.title}
        description={dataToDisplay.pageElements.description}
        imageUrl={dataToDisplay.pageElements.heroImageUrl}
        imageAlt={dataToDisplay.pageElements.heroImageAlt}
      />
      <Part dataToDisplay={dataToDisplay} />
      {dataToDisplay.kind === 'web' && <></>}
      <SimilarCards />
    </div>
  )
}

export default page

const Part = ({ dataToDisplay }: { dataToDisplay: NotableMention }) => {
  switch (dataToDisplay.kind) {
  case 'mobile':
    // eslint-disable-next-line no-case-declarations
    const pageElements = dataToDisplay.pageElements
    return (
      <div>
        <SectionBelowHero
          about={pageElements.about}
          aboutImageUrl={pageElements.aboutImageUrl}
          aboutImageAlt={pageElements.aboutImageAlt}
          contribution={pageElements.contribution}
          title={dataToDisplay.title}
        />
        <div
          className={dataToDisplay.id === 'ct-support' ? 'pt-[110  px]' : ''}
        >
          <SectionImageLeft
            id={dataToDisplay.id}
            heading={pageElements.sectionOne.heading}
            headingSpan={pageElements.sectionOne.headerSpan}
            description={pageElements.sectionOne.description}
            imageUrl={pageElements.sectionOne.imageUrl}
            imageAlt={pageElements.sectionOne.imageAlt}
          />
        </div>
        <div
          className={
            dataToDisplay.id === 'cleartrip-bus' ? 'py-[60px]' : 'py-[120px]'
          }
        >
          <SectionImageRight
            id={dataToDisplay.id}
            heading={pageElements.sectionTwo.heading}
            headingSpan={pageElements.sectionTwo.headerSpan}
            description={pageElements.sectionTwo.description}
            imageUrl={pageElements.sectionTwo.imageUrl}
            imageAlt={pageElements.sectionTwo.imageAlt}
          />
        </div>
        <SectionImageLeft
          id={dataToDisplay.id}
          heading={pageElements.sectionThree.heading}
          headingSpan={pageElements.sectionThree.headerSpan}
          description={pageElements.sectionThree.description}
          imageUrl={pageElements.sectionThree.imageUrl}
          imageAlt={pageElements.sectionThree.imageAlt}
        />
        {pageElements.multiMobileImgUrl && pageElements.multiMobileImgAlt && (
          <MultiMobileContainer
            imageUrl={pageElements.multiMobileImgUrl}
            imageAlt={pageElements.multiMobileImgAlt}
          />
        )}
      </div>
    )
  case 'web':
    return <div></div>
  default:
  }
}
