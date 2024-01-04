import Image from 'next/image'
import React from 'react'

export type SectionProps = {
  heading: string
  headingSpan: string
  imageUrl: string
  imageAlt: string
  id: string
  description: string
}

const SectionImageRight = ({
  id,
  heading,
  description,
  imageUrl,
  imageAlt,
  headingSpan,
}: SectionProps) => {
  console.log(id)

  return (
    <div
      className={`${
        id === '1centbetter' ? 'justify-between' : 'gap-[60px]'
      } mx-auto flex max-w-largest items-center`}
    >
      <div className={`${id === '1centbetter' ? 'max-w-[599px]' : ''}`}>
        <h1 className="mb-8 text-[90px] font-semibold leading-[112px] -tracking-[1.6px]">
          <span className="text-[#573FEA]">{heading}</span>{' '}
          <span className="">{headingSpan}</span>
        </h1>
        <p className="text-2xl leading-10">{description}</p>
      </div>
      <div className="shrink-0">
        <Image
          height={866}
          width={id === '1centbetter' ? 496 : 551}
          src={imageUrl}
          alt={imageAlt}
        />
      </div>
    </div>
  )
}

export default SectionImageRight
