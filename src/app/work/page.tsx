import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/footer'
import Card from '@/components/works/Card'
const page = () => {
	return (
		<div className='bg-[#F8F7F2]'>
			<Navbar />
			<section className='mt-[120px] mb-40 max-w-largest mx-auto'>
				<div className='flex  max-w-largest mx-auto gap-40'>
					<h1 className='leading-[92px] tracking-[-1.6px] text-[72px] font-semibold shrink-0 pr-12 text-[#573FEA]'>Work Folio </h1>
					{/* added gap and padding right */}
					<p className="text-xl font-medium leading-8  pr-9">In my career, Ive overseen a variety of projects, spanning electric mobility solutions, school administration software, and a next-gen lifestyle app. Transitioning to Zeta, I honed my expertise in developing Finance-First solutions for large-scale products. Later, at Flipkart, I played a crucial role in transforming Cleartrip and Flipkart Travel into seamlessly integrated end-to-end travel experiences. </p>
				</div>
			</section>

			<section className='cardcontainer | max-w-largest flex flex-col gap-10  mx-auto mb-[120px]'>
				<Card />
			</section>

			<section className='pt-[120px] max-w-largest mx-auto bg-[#F8F7F2] pb-[304px] '>
				<div className='flex gap-40 mb-20'>
					<h1 className='leading-[92px] tracking-[-1.6px] text-[72px] font-semibold shrink-0 text-[#573FEA] pr-12'>Notable <br />Mentions <> <></> </></h1>
					{/* added gap and padding right */}
					<p className="text-xl font-medium leading-8 pr-9 ">In addition to my primary roles in overseeing diverse projects, my career has been marked by significant contributions to various initiatives that have left a lasting impact. These experiences have not only broadened my skill set but have also underscored my ability to adapt and excel in different domains. </p>
				</div>

				<div className='tabs | inline-flex mb-12 font-semibold text-xl text-[#606060] gap-6 justify-center w-full '>
					<div className="py-3 px-6 rounded-[72px] border-2 border-[#573FEA] text-[#573FEA]	 bg-[#DFDAFF] cursor-pointer">All Mentions</div>
					<div className="py-3  px-6 rounded-[72px] border border-[#B5B1B1] bg-white cursor-pointer">Web</div>
					<div className="py-3  px-6 rounded-[72px] border border-[#B5B1B1] bg-white cursor-pointer">Mobile</div>
					<div className="py-3  px-6 rounded-[72px] border border-[#B5B1B1] bg-white cursor-pointer">General</div>
				</div>

				<div className="grid grid-cols-3 max-w-largest mx-auto gap-x-5 gap-y-8 auto-rows-min">

					<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p>
					</div>
					<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div><div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div><div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div><div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div><div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div>

						<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div>
						<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div>
						<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div>
						<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div>
						<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div>
						<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-workCard">
						<Image src="/workpage/firstbox.svg" width={450} height={450} alt="firstbox" className="shrink-0" ></Image>
						<h3 className="text-2xl  font-semibold pt-6 pb-2 leading-8">Rewards Center</h3>
						<p className='leading-6 text-base'> Run rewards programs and drive customer engagement </p></div>
						
					{/* testimonial */}
					<div className="border border-black border-solid col-span-3  bg-white p-6 rounded-3xl shadow-[8px_8px_0px_0px_#573FEA]">
						<h2 className="text-center pt-8 pb-16 text-3xl font-semibold mb-4">been part of these colleges/corporates event</h2>
						<div className="grid grid-cols-4 max-w-[1080px] mx-auto gap-y-7 pb-20 gap-20 justify-items-center items-center">
							<div className="w-full">
								<Image src="/jniit.svg" width={90} height={100} className="mx-auto" alt="college-image" />
								<p className="text-center pt-2 font-bold">Ecell, NIT Jamshedpur</p>
							</div>
							<div><Image src="/shrishti.svg" width={74} height={100} className="mx-auto" alt="college-image" />
								<p className="text-center pt-2 font-bold">Shristi University, Bangalore</p></div>
							<div>3</div>
							<div>4</div>
							<div className="w-full">
								<Image src="/jniit.svg" width={90} height={100} className="mx-auto" alt="college-image" />
								<p className="text-center pt-2 font-bold">Ecell, NIT Jamshedpur</p>
							</div>
							<div>6</div>
							<div>7</div>
							<div>8</div>

						</div>
					</div>
				</div>

			</section>

			<Footer />
		</div>
	)
}

export default page