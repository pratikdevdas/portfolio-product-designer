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
  heading,
  description,
  imageUrl,
  imageAlt,
  headingSpan,
}: SectionProps) => {
  return (
    <div className="mx-auto flex  max-w-largest items-center gap-[60px]">
      <div className="">
        <h1 className="mb-8 text-[90px] font-semibold leading-[112px] -tracking-[1.6px]">
          {heading} <span className="text-[#573FEA]">{headingSpan}</span>
        </h1>
        <p className="text-2xl leading-10">{description}</p>
      </div>
      <div className="shrink-0">
        <Image height={866} width={551} src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  )
}

export default SectionImageRight
