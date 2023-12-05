import Image from "next/image"

const talks = () => {
	return (
		<section className='pt-60 bg-[#FFDE70] pb-[488px]  '>
			<div className='flex  max-w-screen-xl mx-auto gap-10 pb-28'>
				<h1 className='leading-[92px] tracking-[-1.6px] text-[84px] font-semibold'><span>Talks.</span> <br /><span className="text-[#573FEA]">Workshops. </span></h1>
				<div className='leading-6 text-lg'>

					<p className="mb-6">From the societies of the different colleges to the new startups of the UX Communities. I volunteered to give my time to new students or people who want to learn UX, meet creative people, give lectures on design, research and careers in new places. </p>
					<p>
						I’ve had the honor of speaking at over 20+ events in some of the most beautiful and vibrant parts of the India. Im intent on challenging the ways we think about design, and being present in places that aren’t frequented by big conferences.</p>
				</div>
			</div>
			<div className="grid grid-cols-3 max-w-screen-xl mx-auto gap-x-5 gap-y-8 auto-rows-min">
				<div className="flex border border-black border-solid col-span-3 bg-white p-6 rounded-3xl gap-6 shadow-[8px_8px_0px_0px_#573FEA]">
					{/* workaround: explicity height reason(as i was not able to remove height auto from basic) : https://github.com/tailwindlabs/tailwindcss/pull/7742#issuecomment-1061332148 */}
					<Image src="/desingboat.png" width={746} height={508} alt="designboat" className="shrink-0 h-[508px]" />
					<div><Image src="/designboatlogo.svg" alt="logo" width={147} height={54} />
						<h1 className="py-4 leading-10 font-semibold text-4xl"> Designboat Design Bootcamp</h1>
						<p className=" font-medium leading-6">UI and UX Design Bootcamp by Designboat and it’s split in a 4hrs session for 2 days in a week for 14 weeks where mentees learn about user research, process, wireframes and a lot more about design.
							<br /> All they needed to bring was their energy to learn new and interesting skills., which could be anything from an app, a video game or even a paper prototype.</p>
					</div>
				</div>
				<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-[4px_4px_0px_0px_#573FEA]">
					<Image src="/kiitxshu.png" width={746} height={508} alt="designboat" className="shrink-0" ></Image>
					<h3 className="text-xl font-semibold pt-4">Design Optimisation: Improving user experience by making design more efficient and effective. </h3>
				</div>
				<div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-[4px_4px_0px_0px_#573FEA]">
					<Image src="/kiitxshu.png" width={746} height={508} alt="designboat" className="shrink-0" ></Image>
					<h3 className="text-xl font-semibold pt-4">Design Optimisation: Improving user experience by making design more efficient and effective. </h3>
				</div><div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-[4px_4px_0px_0px_#573FEA]">
					<Image src="/kiitxshu.png" width={746} height={508} alt="designboat" className="shrink-0" ></Image>
					<h3 className="text-xl font-semibold pt-4">Design Optimisation: Improving user experience </h3>
				</div><div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-[4px_4px_0px_0px_#573FEA]">
					<Image src="/kiitxshu.png" width={746} height={508} alt="designboat" className="shrink-0" ></Image>
					<h3 className="text-xl font-semibold pt-4">Design Optimisation: Improving user experience by making design more efficient and effective. </h3>
				</div><div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-[4px_4px_0px_0px_#573FEA]">
					<Image src="/kiitxshu.png" width={746} height={508} alt="designboat" className="shrink-0" ></Image>
					<h3 className="text-xl font-semibold pt-4">Design Optimisation: Improving user experience by making design more efficient and effective. </h3>
				</div><div className="border border-black border-solid bg-white p-6 rounded-3xl shadow-[4px_4px_0px_0px_#573FEA]">
					<Image src="/kiitxshu.png" width={746} height={508} alt="designboat" className="shrink-0" ></Image>
					<h3 className="text-xl font-semibold pt-4">Design Optimisation: Improving user experience by making design more efficient and effective. </h3>
				</div>
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
	)
}

export default talks