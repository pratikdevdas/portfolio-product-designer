import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const footer = () => {
	return (
		<div className='bg-[#0E0D1A] pt-[530px] pb-[304px]  relative'>
			<div className='absolute flex flex-col items-center rounded-3xl text-center top-0 px-[316px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#573FEA] text-white'>
				<Link href="/"><Image src="./sush-white.svg" className='pt-8' alt='logo' width={150} height={150} /></Link>
				<h1 className='py-8 text-5xl font-semibold'>Say Hello</h1>
				<p className='text-xl font-medium leading-8 max-w-[576px]'>Have an exciting opportunity and would love to collaborate on something cool. Feel free to reach out and say hello!</p>
				<div className='flex py-[56px] gap-6 min-w-max '>
					<button className="p-9 shrink-0 inline-flex gap-2 border-[3px] text-2xl font-semibold border-solid border-white rounded-xl text-[white] justify-center"><span>Drop a mail</span> <Image width={32} height={32} alt="arrow" src="/whitearrow.svg" /></button>
					<button className="p-9 shrink-0 inline-flex gap-2 border-[3px] text-2xl font-semibold border-solid border-white rounded-xl text-[white] justify-center"><span>Download Resume</span> <Image width={32} height={32} alt="arrow" src="/whitearrow.svg" /></button>
				</div>
				<div className='flex'>
					{/* <Image src="" height={} width={} alt='' /> */}
					{/* <Image src="" height={} width={} alt='' /> */}
					{/* <Image src="" height={} width={} alt='' /> */}
					{/* <Image src="" height={} width={} alt='' /> */}
					{/* <Image src="" height={} width={} alt='' /> */}
				</div>
			</div>

			<Image src="/footer.svg" alt="footer-image" className='mx-auto' width={3503} height={120} />
		</div>
	)
}

export default footer