import Image from 'next/image'
import React from 'react'

const SectionImageLeft = () => {
  return (
    <div className="mx-auto flex max-w-largest items-center gap-[115px]">
      <div className="shrink-0">
        <Image
          height={947}
          width={496}
          src="/notable/cleartripbus-section-left-third.png"
          alt=""
        />
      </div>
      <div className="">
        <h1 className="mb-8 text-[90px] font-semibold leading-[112px] tracking-[1.6px]">
          Review your Booking
        </h1>
        <p className="text-2xl leading-10">
          Prior to making a payment, users often want to confirm the accuracy of
          their selections, leading to repeated back-and-forth checks. To
          simplify this process for users and ensure they make the right
          choices, we introduced a review page before payment.
        </p>
      </div>
    </div>
  )
}

export default SectionImageLeft
