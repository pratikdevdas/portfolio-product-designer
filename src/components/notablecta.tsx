import data from '@/app/work/data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const NotableCta = () => {
  return (
    <section className="bg-black py-[196px]">

      <div className="mx-auto max-w-largest">
        <div className='flex pb-[86px] justify-between'>
          <h1 className=" text-white text-[96px] font-semibold leading-[92px] tracking-[-1.6px]">
            Notable Mentions
          </h1>
		  <Link href="work/#notable">
            <button className="inline-flex justify-center gap-2 rounded-[18px] border-[3px] border-solid border-white p-9 text-2xl font-semibold text-white">
              <span>See all</span>{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8988 8.82296C23.8342 8.66685 23.7387 8.52053 23.6123 8.39336C23.6104 8.39147 23.6085 8.38958 23.6066 8.3877C23.3467 8.12923 23.0067 8 22.6667 8H9.33333C8.59695 8 8 8.59695 8 9.33333C8 10.0697 8.59695 10.6667 9.33333 10.6667H19.4477L8.39052 21.7239C7.86983 22.2446 7.86983 23.0888 8.39052 23.6095C8.91122 24.1302 9.75544 24.1302 10.2761 23.6095L21.3333 12.5523V22.6667C21.3333 23.403 21.9303 24 22.6667 24C23.403 24 24 23.403 24 22.6667V9.33529C24 9.3292 24 9.32311 23.9999 9.31702C23.9978 9.14218 23.9621 8.97543 23.8988 8.82296Z" fill="white"/>
              </svg>
            </button>
          </Link>
        </div>
        <div className="mx-auto grid max-w-largest auto-rows-min grid-cols-3 gap-x-5 gap-y-8">
          {data.slice(0, 3).map((d) => (
            <Link key={d.id} href={`work/notable/${d.id}`}>
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
    </section>
  )
}

export default NotableCta