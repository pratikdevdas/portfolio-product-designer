import React from 'react'
import Image from 'next/image'

const MultiMobileContainer = () => {
  return (
    <div className="mx-auto flex items-center justify-center pt-[120px]">
      <Image
        height={1338}
        width={1920}
        src="/notable/notable-mobiles.png"
        alt=""
      />
    </div>
  )
}

export default MultiMobileContainer
