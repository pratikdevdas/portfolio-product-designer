import Image from 'next/image'
import React from 'react'

const PhoneContainer = ({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string
  imageAlt: string
}) => {
  return <Image height={610} width={1220} src={imageUrl} alt={imageAlt} />
}

const SectionBelowHero = ({
  title,
  about,
  aboutImageUrl,
  aboutImageAlt,
}: {
  title: string
  about: string
  aboutImageUrl: string
  aboutImageAlt: string
}) => {
  const splitCharacter = '--'
  const splitIndex = about.indexOf(splitCharacter)
  const partBefore = about.substring(0, splitIndex).trim()
  const partAfter = about.substring(splitIndex + 2).trim()

  return (
    <div className="mb-[120px] bg-black">
      <div className="mx-auto flex max-w-largest gap-28 text-xl font-normal leading-[30px] text-white">
        <div className="mx-auto  py-20 ">
          <h2 className="pb-4 text-[32px] font-medium leading-[48px]">
            About {title}
          </h2>
          {splitIndex !== -1 ? (
            <div>
              <p className="pb-12">{partBefore}</p>
              <p>{partAfter}</p>
            </div>
          ) : (
            <>{about}</>
          )}
        </div>
        <PhoneContainer imageUrl={aboutImageUrl} imageAlt={aboutImageAlt} />
      </div>
    </div>
  )
}
export default SectionBelowHero
