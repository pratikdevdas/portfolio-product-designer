'use client'

import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/footer'
import Card from '@/components/works/CardMobile'
import data from './data'
import Link from 'next/link'

const talksData = [
  {
    id: 'micro',
    title: 'MicroInteractions',
    description: 'Run rewards programs and drive customer engagement',
    cardImageUrl: '/workpage/talks/MicroInteractions.svg',
    cardImageAlt: 'micro',
  },
  {
    id: 'b2cvb2v',
    title: 'Designing for B2B vs B2C',
    description: 'Access real-time business analytics',
    cardImageUrl: '/workpage/talks/Designing for B2B vs B2C.svg',
    cardImageAlt: 'b2c',
  },
  {
    id: 'skill101',
    title: 'Wireframes skill 101',
    description: 'Generate periodic preconfigured reports',
    cardImageUrl: '/workpage/talks/Wireframes skill 101.svg',
    cardImageAlt: 'Wireframes skill 101',
  },
]

const Work = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('type')

  return (
    <div className="bg-[#F8F7F2]">
      <Navbar />
      <section className="mx-auto mb-40 mt-[120px] max-w-largest">
        <div className="mx-auto  flex max-w-largest gap-40">
          <h1 className="shrink-0  pr-8 text-[72px] font-semibold leading-[92px] tracking-[-1.6px] text-[#573FEA]">
            Work Folio
          </h1>
          {/* added gap and padding right */}
          <p className="text-xl font-medium  leading-8">
            In my career, Ive overseen a variety of projects, spanning electric
            mobility solutions, school administration software, and a next-gen
            lifestyle app. Transitioning to Zeta, I honed my expertise in
            developing Finance-First solutions for large-scale products. Later,
            at Flipkart, I played a crucial role in transforming Cleartrip and
            Flipkart Travel into seamlessly integrated end-to-end travel
            experiences.
          </p>
        </div>
      </section>

      <section className="cardcontainer | mx-auto mb-[120px] flex max-w-largest  flex-col gap-10">
        <Card />
      </section>

      <section className="mx-auto max-w-largest bg-[#F8F7F2] pb-[304px] pt-[120px] ">
        <div className="mb-20 flex gap-40">
          <h1 className="shrink-0 pr-12 text-[72px] font-semibold leading-[92px] tracking-[-1.6px] text-[#573FEA]">
            Notable <br />
            Mentions
          </h1>
          {/* added gap and padding right */}
          <p className="text-xl font-medium leading-8 ">
            In addition to my primary roles in overseeing diverse projects, my
            career has been marked by significant contributions to various
            initiatives that have left a lasting impact. These experiences have
            not only broadened my skill set but have also underscored my ability
            to adapt and excel in different domains.{' '}
          </p>
        </div>

        <div className="tabs | mb-12 inline-flex w-full justify-center gap-6 text-xl font-semibold text-[#606060] ">
          <Link
            className={`${
              !search
                ? 'border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]'
                : 'border border-[#B5B1B1] bg-white'
            } cursor-pointer rounded-[72px]  px-6 py-3 `}
            href="?"
            scroll={false}
          >
            All Mentions
          </Link>
          <Link
            href="?type=web"
            className={`${
              search === 'web'
                ? 'border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]'
                : 'border border-[#B5B1B1] bg-white'
            } cursor-pointer rounded-[72px]  px-6 py-3 `}
            scroll={false}
          >
            Web
          </Link>
          <Link
            href="?type=mobile"
            className={`${
              search === 'moblie'
                ? 'border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]'
                : 'border border-[#B5B1B1] bg-white'
            } cursor-pointer rounded-[72px]  px-6 py-3 `}
            scroll={false}
          >
            Mobile
          </Link>
          <Link
            href="?type=general"
            className={`${
              search === 'general'
                ? 'border-2 border-[#573FEA] bg-[#DFDAFF] text-[#573FEA]'
                : 'border border-[#B5B1B1] bg-white'
            } cursor-pointer rounded-[72px]  px-6 py-3 `}
            scroll={false}
          >
            General
          </Link>
        </div>
        <div className="mx-auto grid max-w-largest auto-rows-min grid-cols-3 gap-x-5 gap-y-8">
          {data
            .filter((d) => (search ? d.kind === search : d))
            .map((d) => (
              <Link key={d.id} href={`work/notable/${d.id}`}>
                <div className="rounded-3xl bg-[#573FEA] hover:transition-all ">
                  <div className=" relative rounded-3xl border border-solid border-black bg-white p-6 shadow-workCard duration-500 ease-card-up transform-style-3d translate-z-0 skew-x-0 skew-y-0 scale3d-100 hover:-translate-y-[1.25rem] hover:translate-x-[0.5rem] hover:rotate-2">
                    <div className="relative">
                      <Image
                        src={d.cardImageUrl}
                        width={450}
                        height={450}
                        alt={d.cardImageAlt}
                        className="shrink-0"
                      ></Image>
                      <div className="absolute left-4 top-4 flex gap-[3px] text-[10px] font-semibold uppercase leading-4 tracking-[0.4px]">
                        {d.categories.map((c, i) => (
                          <div
                            key={i}
                            className="rounded-[50px] bg-black px-[10px] py-1 text-white"
                          >
                            {c === 'Web App' ? 'web' : c}
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3 className="pb-2  pt-6 text-2xl font-semibold leading-8">
                      {d.title}
                    </h3>
                    <p className="text-base leading-6">{d.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <div className="mb-[60px] mt-[120px] flex gap-72 ">
          <h1 className="shrink-0 pr-12 text-[72px] font-semibold leading-[92px] tracking-[-1.6px] text-[#573FEA]">
            Talk <br />
            Slides
          </h1>
          {/* added gap and padding right */}
          <p className="text-xl font-medium leading-8  ">
            In my career, Ive overseen a variety of projects, spanning electric
            mobility solutions, school administration software, and a next-gen
            lifestyle app. Transitioning to Zeta, I honed my expertise in
            developing Finance-First solutions for large-scale products. Later,
            at Flipkart, I played a crucial role in transforming Cleartrip and
            Flipkart Travel into seamlessly integrated end-to-end travel
            experiences.
          </p>
        </div>

        <div className="row-span-1 mx-auto grid max-w-largest grid-cols-3 items-stretch  gap-x-5 gap-y-8">
          {talksData.map((d) => (
            // <div key={d.id} className="rounded-3xl bg-[#573FEA] hover:transition-all">
            // <Link  className='h-full' href={`work/notable/${d.id}`}>
            <div
              key={d.id}
              className="h-full rounded-3xl border border-solid border-black bg-white p-6 shadow-workCard"
            >
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
            //</Link>
            // </div>
          ))}
        </div>

        <div className="mb-60 mt-40 flex gap-6">
          <div className="flex-1">
            <div>
              <Image
                src="/workpage/books-illustration.svg"
                width={391}
                height={222}
                alt="books illustrations"
                className="mx-auto mb-[10px]"
              />
            </div>
            <h1 className="text-center  text-[72px] font-semibold leading-[82px] tracking-[-1.6px]">
              Principles & Process
            </h1>
          </div>
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex gap-6">
              <div>
                <Image
                  alt="smile"
                  width={187}
                  height={107}
                  src="/workpage/smile-process.svg"
                />
              </div>
              <div>
                <h4 className="mb-2 text-2xl font-bold leading-8">
                  Design Principles
                </h4>
                <p className="text-xl leading-8">
                  Access real-time business analytics
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <Image
                  alt="smile"
                  width={187}
                  height={107}
                  src="/workpage/deck-process.svg"
                />
              </div>
              <div>
                <h4 className="mb-2 text-2xl font-bold leading-8">
                  Design Process
                </h4>
                <p className="text-xl leading-8">
                  Access real-time business analytics
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <Image
                  alt="smile"
                  width={187}
                  height={107}
                  src="/workpage/container-process.svg"
                />
              </div>
              <div>
                <h4 className="mb-2 text-2xl font-bold leading-8">
                  System Thinking
                </h4>
                <p className="text-xl leading-8">
                  Access real-time business analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Work
