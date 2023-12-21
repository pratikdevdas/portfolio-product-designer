import Image from 'next/image'
import React from 'react'

const SectionImageRight = () => {
  return (
    <div className="mx-auto flex  max-w-largest items-center gap-[60px] py-[30px]">
      <div className="">
        <h1 className="mb-8 text-[90px] font-semibold leading-[112px] tracking-[1.6px]">
          All in One Screen
        </h1>
        <p className="text-2xl leading-10">
          This section lets users choose seats, review bus amenities, check
          cancellation policies, and read user reviews – a crucial and
          transparent feature for informed decision-making before boarding.
        </p>
      </div>
      <div className="shrink-0">
        <Image
          height={866}
          width={551}
          src="/notable/cleartrip-section-image-right.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default SectionImageRight
