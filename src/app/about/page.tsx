import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
const page = () => {
	return (
		<div>
			<Navbar />
			<section className='pt-[120px] pb-40 max-w-largest mx-auto relative'>
				<div>
					<h1 className='text-6xl leading-[72px] font-medium tracking-[-1.6px]'>Hi there,  <br />	I’m
						<span className='text-[#573FEA]'> Shushant.</span></h1>
					<p className='text-xl font-medium leading-8 max-w-lg py-6'>I’m a product designer passionate about working through ambiguity and designing tools that empower seamless and efficient work for people and businesses. </p>
					<button className="rounded-xl px-5 py-4 inline-flex justify-center text-white bg-[#573FEA]">Connect with me</button>
				</div>
				<Image src="/about/hero-sus.png" className='absolute right-0 top-16' width={594} height={765} alt="hero-about" />
			</section>

			<section className='bg-black py-[120px] text-white'>
				<div className='max-w-largest mx-auto'>
					<h1 className='text-[80px] leading-[88px] font-medium tracking-[-1.6px] pb-[120px]'>About me</h1>
					<div className="flex gap-32">
						<div>
							<div>
								<p className='pb-2'>SUMMARY</p>
								<h1>Intersection of<span> Design and My Engineering life</span></h1>
								<p>Thanks to my engineering life which was full of college events, learning designs and working with startup as freelance in my early days, I connect UX/UI design with real business goals, while providing delightful client experiences.

									<p>Currently, I’m designing and solving design challenges in travel industry at Flipkart (travel and Cleartrip) with an incredible team. Previously, I was an solving Banking & Finance Space at Zeta Suite.</p>
									Outside of my full-time commitments, I work with a select freelance client base to create phenomenal products and solutions.
									I’m passionate about building & designing thoughtful experiences to make sure your customers and users are satisfied when they’re using your products and services online.
									I also love documenting my journey and sharing it with the community to help others succeed and grow.
								</p>
								<p></p>
								<p></p>
							</div>
							<div>
								<p className='pb-2'>SUMMARY</p>
								<h1>Intersection of<span> Design and My Engineering life</span></h1>
								<p>Thanks to my engineering life which was full of college events, learning designs and working with startup as freelance in my early days, I connect UX/UI design with real business goals, while providing delightful client experiences.

									<p>Currently, I’m designing and solving design challenges in travel industry at Flipkart (travel and Cleartrip) with an incredible team. Previously, I was an solving Banking & Finance Space at Zeta Suite.</p>
									Outside of my full-time commitments, I work with a select freelance client base to create phenomenal products and solutions.
									I’m passionate about building & designing thoughtful experiences to make sure your customers and users are satisfied when they’re using your products and services online.
									I also love documenting my journey and sharing it with the community to help others succeed and grow.
								</p>
								<p></p>
								<p></p>
							</div>
							<div>
								<p className='pb-2'>SUMMARY</p>
								<h1>Intersection of<span> Design and My Engineering life</span></h1>
								<p>Thanks to my engineering life which was full of college events, learning designs and working with startup as freelance in my early days, I connect UX/UI design with real business goals, while providing delightful client experiences.

									<p>Currently, I’m designing and solving design challenges in travel industry at Flipkart (travel and Cleartrip) with an incredible team. Previously, I was an solving Banking & Finance Space at Zeta Suite.</p>
									Outside of my full-time commitments, I work with a select freelance client base to create phenomenal products and solutions.
									I’m passionate about building & designing thoughtful experiences to make sure your customers and users are satisfied when they’re using your products and services online.
									I also love documenting my journey and sharing it with the community to help others succeed and grow.
								</p>
								<p></p>
								<p></p>
							</div>
						</div>
						<div>
							<h1>work experience</h1>
							<div>
								<h2>Flipkart-Cleartrip,  <span>Sr. Product Designer</span></h2>
								<h3>Nov 2021 - Present</h3>
								<p>Expanding and reimagining Cleartrip and flipkart travel in an end-to-end travel first product and help our users plan their end-to-end trip seamlessly.</p>
							</div>
							<div>
								<h2>Flipkart-Cleartrip,  <span>Sr. Product Designer</span></h2>
								<h3>Nov 2021 - Present</h3>
								<p>Expanding and reimagining Cleartrip and flipkart travel in an end-to-end travel first product and help our users plan their end-to-end trip seamlessly.</p>
							</div>
							<div>
								<h2>Flipkart-Cleartrip,  <span>Sr. Product Designer</span></h2>
								<h3>Nov 2021 - Present</h3>
								<p>Expanding and reimagining Cleartrip and flipkart travel in an end-to-end travel first product and help our users plan their end-to-end trip seamlessly.</p>
							</div>

							<h1>work experience</h1>
							<div>
								<h2>Flipkart-Cleartrip,  <span>Sr. Product Designer</span></h2>
								<h3>Nov 2021 - Present</h3>
								<p>Expanding and reimagining Cleartrip and flipkart travel in an end-to-end travel first product and help our users plan their end-to-end trip seamlessly.</p>
							</div>
							<div>
								<h2>Flipkart-Cleartrip,  <span>Sr. Product Designer</span></h2>
								<h3>Nov 2021 - Present</h3>
								<p>Expanding and reimagining Cleartrip and flipkart travel in an end-to-end travel first product and help our users plan their end-to-end trip seamlessly.</p>
							</div>
							<div>
								<h2>Flipkart-Cleartrip,  <span>Sr. Product Designer</span></h2>
								<h3>Nov 2021 - Present</h3>
								<p>Expanding and reimagining Cleartrip and flipkart travel in an end-to-end travel first product and help our users plan their end-to-end trip seamlessly.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default page