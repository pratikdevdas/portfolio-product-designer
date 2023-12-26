import React from 'react'
import Image from 'next/image'
import data from '@/app/work/data'
import Link from 'next/link'

const SimilarCards = () => {
  return (
    <div className="mx-auto my-[120px] max-w-largest">
      <h1 className="mb-8 text-5xl font-semibold leading-[92px] -tracking-[1.6px]">
        Similar Project
      </h1>
      <div className="mx-auto grid max-w-largest auto-rows-min grid-cols-3 gap-x-5 gap-y-8">
        {data.slice(0, 3).map((d) => (
          <Link key={d.id} href={`${d.id}`}>
            <div className="rounded-3xl bg-[#573FEA] hover:transition-all">
              <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-workCard duration-500 ease-card-up transform-style-3d translate-z-0 skew-x-0 skew-y-0 scale3d-100 hover:-translate-y-[1.25rem] hover:translate-x-[0.5rem] hover:rotate-2">
                <Image
                  src={d.cardImageUrl}
                  width={450}
                  height={450}
                  alt={d.cardImageAlt}
                  className="shrink-0"
                ></Image>
                <h3 className="pb-2  pt-6 text-2xl font-semibold leading-8">
                  {d.title}
                </h3>
                <p className="text-base leading-6">{d.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SimilarCards
