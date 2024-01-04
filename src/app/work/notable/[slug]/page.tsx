import React from 'react'
import Hero from './components/Hero'
import SectionBelowHero from './components/SectionBelowHero'
import SectionImageLeft from './components/SectionImageLeft'
import SectionImageRight from './components/SectionImageRight'
import MultiMobileContainer from './components/MultiMobileContainer'
import SimilarCards from './components/SimilarCards'
import data, { NotableMention } from '../../data'
import SectionBelowHeroWeb from './components/Web/SectionBelowHero'
import SectionImageShow from './components/Web/SectionImageShow'
import SectionGeneralBelowHero from './components/general/SectionGeneralBelowHero'

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
        categories={dataToDisplay.categories}
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
  const { about } = dataToDisplay.pageElements

  switch (dataToDisplay.kind) {
  case 'mobile': {
    // eslint-disable-next-line no-case-declarations
    let {
      aboutImageUrl,
      aboutImageAlt,
      sectionOne,
      sectionTwo,
      sectionThree,
      multiMobileImgAlt,
      multiMobileImgUrl,
      contribution,
    } = dataToDisplay.pageElements
    return (
      <div>
        <SectionBelowHero
          about={about}
          aboutImageUrl={aboutImageUrl}
          aboutImageAlt={aboutImageAlt}
          contribution={contribution}
          title={dataToDisplay.title}
        />
        <div
          className={dataToDisplay.id === 'ct-support' ? 'pt-[110px]' : ''}
        >
          <SectionImageLeft
            id={dataToDisplay.id}
            heading={sectionOne.heading}
            headingSpan={sectionOne.headerSpan}
            description={sectionOne.description}
            imageUrl={sectionOne.imageUrl}
            imageAlt={sectionOne.imageAlt}
          />
        </div>
        <div
          className={
            dataToDisplay.id === 'cleartrip-bus' ? 'py-[60px]' : 'py-[120px]'
          }
        >
          <SectionImageRight
            id={dataToDisplay.id}
            heading={sectionTwo.heading}
            headingSpan={sectionTwo.headerSpan}
            description={sectionTwo.description}
            imageUrl={sectionTwo.imageUrl}
            imageAlt={sectionTwo.imageAlt}
          />
        </div>
        <SectionImageLeft
          id={dataToDisplay.id}
          heading={sectionThree.heading}
          headingSpan={sectionThree.headerSpan}
          description={sectionThree.description}
          imageUrl={sectionThree.imageUrl}
          imageAlt={sectionThree.imageAlt}
        />
        {multiMobileImgUrl && multiMobileImgAlt && (
          <MultiMobileContainer
            imageUrl={multiMobileImgUrl}
            imageAlt={multiMobileImgAlt}
          />
        )}
      </div>
    )
  }
  case 'web': {
    // eslint-disable-next-line no-case-declarations
    let { sectionImages, contribution } = dataToDisplay.pageElements
    return (
      <div>
        <SectionBelowHeroWeb
          about={about}
          contribution={contribution}
          title={dataToDisplay.title}
        />
        <SectionImageShow sectionImages={sectionImages} />
      </div>
    )
  }
  case 'general': {
    // eslint-disable-next-line no-case-declarations
    // let { sectionImages } = dataToDisplay.pageElements
    let {
      aboutImageUrl,
      aboutImageAlt,
      sectionOne,
      sectionTwo,
      sectionThree,
      multiMobileImgAlt,
      multiMobileImgUrl,
    } = dataToDisplay.pageElements
    return (
      <div>
        <SectionGeneralBelowHero
          about={about}
          title={dataToDisplay.title}
          aboutImageUrl={aboutImageUrl}
          aboutImageAlt={aboutImageAlt}
        />
        <SectionImageLeft
          id={dataToDisplay.id}
          heading={sectionOne.heading}
          headingSpan={sectionOne.headerSpan}
          description={sectionOne.description}
          imageUrl={sectionOne.imageUrl}
          imageAlt={sectionOne.imageAlt}
        />
        <div className="py-[160px]">
          <SectionImageRight
            id={dataToDisplay.id}
            heading={sectionTwo.heading}
            headingSpan={sectionTwo.headerSpan}
            description={sectionTwo.description}
            imageUrl={sectionTwo.imageUrl}
            imageAlt={sectionTwo.imageAlt}
          />
        </div>
        <SectionImageLeft
          id={dataToDisplay.id}
          heading={sectionThree.heading}
          headingSpan={sectionThree.headerSpan}
          description={sectionThree.description}
          imageUrl={sectionThree.imageUrl}
          imageAlt={sectionThree.imageAlt}
        />
        {multiMobileImgUrl && multiMobileImgAlt && (
          <div className="py-10 pb-[160px]">
            <MultiMobileContainer
              id={dataToDisplay.id}
              imageUrl={multiMobileImgUrl}
              imageAlt={multiMobileImgAlt}
            />
          </div>
        )}
      </div>
    )
  }

  default:
  }
}
