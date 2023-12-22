import { NotableMentionPageElements } from '@/app/work/data'
import Image from 'next/image'
import React from 'react'

const PhoneContainer = ({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string
  imageAlt: string
}) => {
  return (
    <div className="mx-auto max-w-largest pt-[120px]">
      <Image height={610} width={1220} src={imageUrl} alt={imageAlt} />
    </div>
  )
}

const SectionBelowHero = ({
  pageElements,
}: {
  pageElements: NotableMentionPageElements
}) => {
  return (
    <div className="mx-auto mb-[120px] bg-black text-xl font-normal leading-[30px] text-white">
      <div className="mx-auto max-w-largest py-20">
        <h2 className="pb-4 text-[32px] font-medium leading-[48px]">
          About me
        </h2>
        <p className="pb-12">{pageElements.about}</p>
        <h2 className="pb-4 text-[32px] font-medium leading-[48px]">
          My contribution
        </h2>
        <p>{pageElements.contribution}</p>
      </div>
      <PhoneContainer
        imageUrl={pageElements.aboutImageUrl}
        imageAlt={pageElements.aboutImageAlt}
      />
    </div>
  )
}
export default SectionBelowHero
