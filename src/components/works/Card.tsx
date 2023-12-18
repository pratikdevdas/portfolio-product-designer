import React from 'react'
import Image from 'next/image'

const Card = () => {
	return (
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
	)
}

export default Card