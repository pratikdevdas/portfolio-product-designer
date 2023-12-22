import { NotableMentionPageElements } from '@/app/work/data'
import Image from 'next/image'
import React from 'react'

const Tags = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className="rounded-[18px] border-[3px] border-[#573FEA] px-9 py-4 text-2xl font-semibold text-[#573FEA]">
      {children}
    </label>
  )
}
const EvenColumns = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="mx-auto flex max-w-largest gap-32 pb-40 pt-[160px]">
      <div className="flex-1">
        <div className="mb-8 flex gap-2">
          <Tags>Mobile</Tags>
          <Tags>Web</Tags>
        </div>
        <h1 className="mb-4 text-7xl font-semibold leading-[92px] -tracking-[1.6px]">
          {title}
        </h1>
        <p className="text-xl font-medium leading-8">{description}</p>
      </div>
      <div>
        <Image
          height={400}
          width={600}
          src="/notable/cleartrip-bus.png"
          alt="bus"
        />
      </div>
    </div>
  )
}

const Hero = ({
  title,
  children,
}: {
  title: string
  children: NotableMentionPageElements
}) => {
  return (
    <div>
      <EvenColumns title={title} description={children.description} />
    </div>
  )
}

export default Hero
