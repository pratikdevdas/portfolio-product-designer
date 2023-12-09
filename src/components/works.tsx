import Image from "next/image"


const works = () => {
	return (
		<section className='mt-16 mb-32 max-w-largest mx-auto '>
			<h1 className='mb-16 text-center leading-[88px] tracking-[-1.6px] text-7xl font-semibold'>Selected Work.</h1>
			<div className='cardcontainer | flex flex-col gap-10 '>
				{/* card start */}
				<div className="bg-[#CCF5F3] pt-28 px-24 gap-32 flex justify-between rounded-3xl border border-black border-solid shadow-workCard">
					<div className="text-center mt-4">
						<h1 className="text-[64px] font-semibold leading-[80px] mb-6 ">
							International flight booking
						</h1>
						<p className="leading-6 font-medium mb-16 text-lg opacity-70">
							This project highlights important areas of opportunities and examines how the international booking process may be improved to allow users to search, choose and book for international flights more quickly, easily, and effectively online.
						</p>
						<button className="p-9 inline-flex gap-2 border-[3px] text-2xl font-semibold border-solid border-[#573FEA] rounded-xl text-[#573FEA] justify-center"><span>Read this casestudy</span> <Image width={32} height={32} alt="arrow" src="/external-arrow.svg" /></button>
					</div>
					<div className="px-5 bg-white flex-shrink-0 pt-9 rounded-t-[20px] border border-black border-solid border-b-0 shadow-workCardMobile">
						<Image width={360} height={500} src="/flight.svg" alt="flight" />
					</div>
				</div>

				<div className="bg-[#FFE9B0] relative pt-28 py-24 px-24 gap-32 flex justify-between rounded-3xl border border-black border-solid shadow-workCard">
					<div className="text-center basis-3/6">
						<h1 className="text-[64px] mt-16 font-semibold leading-[80px] mb-7 ">
							Luminoss
						</h1>
						<p className="leading-6 font-medium mb-16 text-lg opacity-70">
							Luminos is a Customer Engagement suite and offers the following capabilities: Multi-channel Marketing automation ,Rewards and Loyalty management App / Web based user engagement platform.
						</p>
						<button className="p-9 inline-flex gap-2 border-[3px] text-2xl font-semibold border-solid border-[#573FEA] rounded-xl text-[#573FEA] justify-center"><span>Read this casestudy</span> <Image width={32} height={32} alt="arrow" src="/external-arrow.svg" /></button>
					</div>
					<div className=" absolute top-0 right-0 bg-white pt-0 pl-5 pb-5 pr-0 rounded-bl-[20px] rounded-tr-[22px] border border-black border-solid border-r-0 border-t-0 shadow-workCardDesktop">
						<Image width={480} className="rounded-tr-[20px] rounded-bl-[8px] border-black border-solid border border-r-0 h-[493px]" height={493} src="/luminos.png" alt="luminos" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default works