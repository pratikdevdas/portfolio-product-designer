import { sectionImagesWeb } from '@/app/work/data'
import Image from 'next/image'

const SectionImageShow = ({ sectionImages } : { sectionImages : sectionImagesWeb[]}) => {
  return (
    <div className='mx-auto max-w-largest'>
      <h1 className="pb-[60px] text-7xl font-semibold leading-[92px] -tracking-[1.6px]">
        Screenshots
      </h1>

      <div className='flex flex-col gap-[42px] items-center'>
        {sectionImages.map((img:sectionImagesWeb) => <Image key={img.id} src={img.imageUrl} alt={img.imageAlt} height={587} className='h-[587px]' width={1016}/>) }

      </div>
    </div>
  )
}

export default SectionImageShow
