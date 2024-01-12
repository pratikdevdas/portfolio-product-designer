import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className="rounded-3xl bg-[#573FEA] hover:transition-all">
      <div className="flex justify-between gap-32 rounded-3xl border border-solid border-black bg-[#F3F1EB] px-24 pt-28 shadow-workCard duration-500 ease-card-up transform-style-3d translate-z-0 skew-x-0 skew-y-0 scale3d-100 hover:-translate-y-[1.25rem] hover:translate-x-[0.5rem] hover:rotate-2 ">
        <div className="mt-4 text-center">
          <h1 className="mb-6 text-[64px] font-semibold leading-[80px] ">
            Fare families <br />
            for Airlines
          </h1>
          <p className="mb-16 font-medium opacity-70">
            This project seeks to transform the conventional approach to how airlines organize their fare options, providing innovative solutions that bring about positive changes in the airline industry, with a primary focus on benefiting passengers.
          </p>
          <Link href="">
            <button className="inline-flex justify-center gap-2 rounded-xl border-[3px] border-solid border-[#573FEA] p-9 text-2xl font-semibold text-[#573FEA]">
              <span>Read this casestudy</span>{' '}
              <Image
                width={32}
                height={32}
                alt="arrow"
                src="/external-arrow.svg"
              />
            </button>
          </Link>
        </div>
        <div className="flex-shrink-0 rounded-t-[20px] border border-b-0 border-solid border-black bg-white px-5 pt-9 shadow-workCardMobile">
          <Image width={360} height={500} src="/workpage/famariline.png" alt="flight" />
        </div>
      </div>
    </div>
  )
}

export default Card
