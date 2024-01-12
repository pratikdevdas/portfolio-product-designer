import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'

const Card = () => {
  return (
    <div className="rounded-3xl bg-[#573FEA] hover:transition-all">
      <div className=" relative flex justify-between gap-32 rounded-3xl border border-solid border-black bg-[#FEE4FF] px-24 py-24 pt-28 shadow-workCard duration-500 ease-card-up transform-style-3d translate-z-0 skew-x-0 skew-y-0 scale3d-100 hover:-translate-y-[1.25rem] hover:translate-x-[0.5rem] hover:rotate-2 ">
        <div className="basis-3/6 text-center">
          <h1 className="mb-7 mt-16 text-[64px] font-semibold leading-[80px] ">
          CT Upgrade
          </h1>
          <p className="mb-16 font-medium  opacity-70">
          Experience by offering complimentary seat selection and meals, allowing passengers to enjoy added comfort and convenience without additional costs.
          </p>
          <button className="inline-flex justify-center gap-2 rounded-xl border-[3px] border-solid border-[#573FEA] p-9 text-2xl font-semibold text-[#573FEA]">
            <span>Read this casestudy</span>{' '}
            <Image
              width={32}
              height={32}
              alt="arrow"
              src="/external-arrow.svg"
            />
          </button>
        </div>
        <div className=" absolute right-0 top-0 rounded-bl-[20px] rounded-tr-[22px] border border-r-0 border-t-0 border-solid border-black bg-white pb-5 pl-5 pr-0 pt-0 shadow-workCardDesktop">
          <Image
            width={480}
            className="h-[493px] rounded-bl-[8px] rounded-tr-[20px] border border-r-0 border-solid border-black"
            height={493}
            src="/workpage/ctupgrade.png"
            alt="luminos"
          />
        </div>
      </div>
    </div>
  )
}

export default Card
