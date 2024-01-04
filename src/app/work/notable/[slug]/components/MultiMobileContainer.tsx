import React from 'react'
import Image from 'next/image'

const MultiMobileContainer = ({
  imageUrl,
  imageAlt,
  id,
}: {
  id?: string
  imageUrl: string
  imageAlt: string
}) => {
  return (
    <div className="mx-auto flex items-center justify-center pt-[120px]">
      {id === '1centbetter' ? (
        <Image height={372} width={1222} src={imageUrl} alt={imageAlt} />
      ) : (
        <Image height={1338} width={1920} src={imageUrl} alt={imageAlt} />
      )}
    </div>
  )
}

export default MultiMobileContainer
