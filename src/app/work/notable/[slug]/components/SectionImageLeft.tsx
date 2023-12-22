import Image from 'next/image'
import React from 'react'
import { SectionProps } from './SectionImageRight'

const SectionImageLeft = ({
  heading,
  description,
  imageUrl,
  imageAlt,
  headingSpan,
}: SectionProps) => {
  return (
    <div className="mx-auto flex max-w-largest items-center gap-[115px]">
      <div className="shrink-0">
        <Image height={947} width={496} src={imageUrl} alt={imageAlt} />
      </div>
      <div className="">
        <h1 className="mb-8 text-[90px] font-semibold leading-[112px] -tracking-[1.6px]">
          <span className="text-[#573FEA]">{heading}</span> {headingSpan}
        </h1>
        <p className="text-2xl leading-10">{description}</p>
      </div>
    </div>
  )
}

export default SectionImageLeft
