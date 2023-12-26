import React from 'react'
import Image from 'next/image'

const MultiMobileContainer = ({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string
  imageAlt: string
}) => {
  return (
    <div className="mx-auto flex items-center justify-center pt-[120px]">
      <Image height={1338} width={1920} src={imageUrl} alt={imageAlt} />
    </div>
  )
}

export default MultiMobileContainer
