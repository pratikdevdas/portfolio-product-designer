import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/footer'
import Card from '@/components/works/Card'
import data from './data'
import Link from 'next/link'
const page = () => {
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
          <div className="cursor-pointer rounded-[72px] border-2 border-[#573FEA] bg-[#DFDAFF] px-6	 py-3 text-[#573FEA]">
            All Mentions
          </div>
          <div className="cursor-pointer  rounded-[72px] border border-[#B5B1B1] bg-white px-6 py-3">
            Web
          </div>
          <div className="cursor-pointer  rounded-[72px] border border-[#B5B1B1] bg-white px-6 py-3">
            Mobile
          </div>
          <div className="cursor-pointer  rounded-[72px] border border-[#B5B1B1] bg-white px-6 py-3">
            General
          </div>
        </div>

        <div className="mx-auto grid max-w-largest auto-rows-min grid-cols-3 gap-x-5 gap-y-8">
          {data.map((d) => (
            <Link key={d.id} href={`work/notable/${d.id}`}>
              <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-workCard">
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

        <div className="mx-auto grid max-w-largest auto-rows-min grid-cols-3 gap-x-5 gap-y-8">
          <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-workCard">
            <Image
              src="/workpage/firstbox.svg"
              width={450}
              height={450}
              alt="firstbox"
              className="shrink-0"
            ></Image>
            <h3 className="pb-2  pt-6 text-2xl font-semibold leading-8">
              Rewards Center
            </h3>
            <p className="text-base leading-6">
              Run rewards programs and drive customer engagement
            </p>
          </div>
          <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-workCard">
            <Image
              src="/workpage/firstbox.svg"
              width={450}
              height={450}
              alt="firstbox"
              className="shrink-0"
            ></Image>
            <h3 className="pb-2  pt-6 text-2xl font-semibold leading-8">
              Rewards Center
            </h3>
            <p className="text-base leading-6">
              Run rewards programs and drive customer engagement
            </p>
          </div>
          <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-workCard">
            <Image
              src="/workpage/firstbox.svg"
              width={450}
              height={450}
              alt="firstbox"
              className="shrink-0"
            ></Image>
            <h3 className="pb-2  pt-6 text-2xl font-semibold leading-8">
              Rewards Center
            </h3>
            <p className="text-base leading-6">
              Run rewards programs and drive customer engagement
            </p>
          </div>
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
                  src="/workpage/container-process.svg"
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default page
