import Image from 'next/image'
import React from 'react'

const PhoneContainer = () => {
  return (
    <div className="mx-auto max-w-largest pt-[120px]">
      <Image
        height={610}
        width={1220}
        src="/notable/mobiles-cleartrip-bus.png"
        alt=""
      />
    </div>
  )
}

const SectionBelowHero = () => {
  return (
    <div className="mx-auto mb-[120px] bg-black text-xl font-normal leading-[30px] text-white">
      <div className="mx-auto max-w-largest py-20">
        <h2 className="pb-4 text-[32px] font-medium leading-[48px]">
          About me
        </h2>
        <p className="pb-12">
          This project was part of the Cleartrip bus team, with the goal of
          making it easier for users to book bus tickets. While the process of
          finding buses, checking their details, and making a booking may seem
          straightforward. We wanted to enhance the overall experience to ensure
          a smoother and more enjoyable journey for our users.
        </p>
        <h2 className="pb-4 text-[32px] font-medium leading-[48px]">
          My contribution
        </h2>
        <p>
          I was part of a dedicated team consisting of two designers, led by our
          manager. Our collective effort was focused on driving progress in this
          project within a tight timeline of five days.
        </p>
      </div>
      <PhoneContainer />
    </div>
  )
}
export default SectionBelowHero
