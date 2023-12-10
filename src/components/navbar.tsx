import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
	return (
		<div>
			<div className='bg-[#DED9FF]'>
				<div className='py-4 text-center max-w-largest mx-auto  text-[#573FEA] font-semibold'><span>💼</span> Open to work as Full-time and Freelancer . <Link href="#" className='underline'>Contact</Link></div>
			</div> <div className="max-w-largest mx-auto flex justify-between items-center py-6">
				<Link href="/"><Image src="/Shushant.svg" alt='logo' width={120} height={120} /></Link>
				<nav className="primary-navigation" id="primary-navigation">
					<ul aria-label="Primary" role="list" className="flex gap-11 font-medium">
						<li><Link href="#">Work</Link></li>
						<li><Link href="#">workshop</Link></li>
						<li><Link href="/about">About Me</Link></li>
						<li><Link href="#">Contact</Link></li>
					</ul>
				</nav>
				<button className="rounded-xl px-5 py-4 inline-flex justify-center text-white bg-[#573FEA]">Check Resume</button>
			</div></div>
	)
}

export default Navbar