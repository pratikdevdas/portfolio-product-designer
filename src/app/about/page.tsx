import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/footer'
const page = () => {
	return (
		<div>
			<Navbar />
			<section className='pt-[120px] pb-40 max-w-largest mx-auto relative'>
				<div>
					<h1 className='text-7xl leading-[92px] font-semibold tracking-[-1.6px]'>Hi there,  <br />	I’m
						<span className='text-[#573FEA]'> Shushant.</span></h1>
					<p className='text-xl font-medium leading-8 max-w-lg py-6'>I’m a product designer passionate about working through ambiguity and designing tools that empower seamless and efficient work for people and businesses. </p>
					<button className="rounded-xl px-5 py-4 inline-flex justify-cente	r text-white bg-[#573FEA]">Connect with me</button>
				</div>
				<Image src="/about/hero-sus.png" className='absolute right-0 top-[66px]' width={594} height={765} alt="hero-about" />
			</section>

			<section className='bg-black py-[120px] leading-[30px] text-white text-xl font-normal'>
				<div className='max-w-largest mx-auto'>
					<h1 className='text-[80px] leading-[88px] font-medium tracking-[-1.6px] pb-[120px]'>About me</h1>
					<div className="flex gap-32">
						<div className='basis-[600px] flex flex-col gap-12 shrink-0'>
							<div>
								<p className='font-semibold leading-8'>SUMMARY</p>
								<h1 className='font-semibold text-4xl leading-[52px] mb-5 my-1'>Intersection of<span className='text-[#45C8C1]'> Design and My Engineering life</span></h1>
								<div className="flex flex-col gap-4">
									<p>Thanks to my engineering life which was full of college events, learning designs and working with startup as freelance in my early days, I connect UX/UI design with real business goals, while providing delightful client experiences.
									</p>
									<p>Currently, I’m designing and solving design challenges in travel industry at Flipkart (travel and Cleartrip) with an incredible team. Previously, I was an solving Banking & Finance Space at Zeta Suite.</p>
									<p>Outside of my full-time commitments, I work with a select freelance client base to create phenomenal products and solutions.</p>
									<p>I’m passionate about building & designing thoughtful experiences to make sure your customers and users are satisfied when they’re using your products and services online.</p>
									<p>I also love documenting my journey and sharing it with the community to help others succeed and grow.</p>
								</div>
							</div>
							<div>
								<p className='font-semibold leading-8'>SUMMARY</p>
								<h1 className='font-semibold text-4xl leading-[52px] mb-5 my-1'>Following <span className='text-[#45C8C1]'> passion</span></h1>
								<div className="flex flex-col gap-4">
									<p>Design has always been my passion and hobby since my early childhood. Although I studied electronics and electrical engineering in the traditional way at KIIT University, I learned to design on my own out of curiosity.
									</p>
									<p>This curiosity helped me to stay up-to-date from year to year and I’m still learning every single day to ensure I can deliver the most modern and effective solutions. I believe in working hard and smart instead of searching for “hacks and shortcuts”.</p>
									<p>Nowadays, I’ve been fortunate enough to share and give back to the community, leading by example, writing detailed design articles, creating design courses and sharing my design journey to educate and inspire others.</p>
								</div>
							</div>
							<div>
								<p className='font-semibold leading-8'>SUMMARY</p>
								<h1 className='font-semibold text-4xl leading-[52px] mb-5 my-1'>Intersection of<span className='text-[#45C8C1]'> Design and My Engineering life</span></h1>
								<div className="flex flex-col gap-4">
									<p>As technology progresses things are getting more and more complex. As a designer, I have a special opportunity to make these complex processes simple, delightful and joyous for every day use.
									</p>
									<p>Design allows us to differentiate ourselves by showing attention and care about our customers and users. Everybody values design either consciously or unconsciously. This is why I love creating thoughtful, meaningful and polished experiences, which makes both the creators and customers happy.</p>
									<p className='text-[#45C9C1]'>In case you would like to know more about me, my work or have any questions, </p>
									<p className='text-[#45C9C1]'>feel free to send me an email anytime</p>
								</div>
							</div>
						</div>
						<div className=''>
							<h1 className='mb-8 leading-[52px] font-semibold text-4xl'>work experience</h1>
							<div className='pb-10'>
								<h2 className='text-2xl font-semibold leading-[48px]'>Flipkart-Cleartrip,  <span className='text-[#45C9C1]'>Sr. Product Designer</span></h2>
								<h3 className='my-1 text-xl font-bold leading-7'>Nov 2021 - Present</h3>
								<p>Expanding and reimagining Cleartrip and flipkart travel in an end-to-end travel first product and help our users plan their end-to-end trip seamlessly.</p>
							</div>
							<div className='pb-10'>
								<h2 className='text-2xl font-semibold leading-[48px]'>Zeta Suite,  <span className='text-[#45C9C1]'>	Product Designer</span></h2>
								<h3 className='my-1 text-xl font-bold leading-7'>Apr 2019 - Nov 2021</h3>
								<p>Working closely with a design group on large-scale products for different countries and create Finance-First products for banks and other financial institutions.</p>
							</div>
							<div className='mb-28' >
								<h2 className='text-2xl font-semibold leading-[48px]'>Appiness,	  <span className='text-[#45C9C1]'> Rookie UX Designer</span></h2>
								<h3 className='my-1 text-xl font-bold leading-7'>Aug 2018 - Mar 2019</h3>
								<p>In my tenure here, I have worked on 6 different products, with the most recent ones being the electric mobility solutions, school administration software, and the next-gen lifestyle app.</p>
							</div>


							<h1 className='mb-8 leading-[52px] font-semibold text-4xl'>involvement</h1>
							<div className='pb-10'>
								<h2 className='text-2xl font-semibold leading-[48px]'>Designboat UIUX School -  <span className='text-[#45C9C1]'>Design Faculty</span></h2>
								<h3 className='my-1 text-xl font-bold leading-7'>Jan 2021 - Present</h3>
								<p>Guiding aspiring designers on breaking into the design industry and made design more accessible by organizing relevant educational workshops, speaker events, and fostering an open design community.</p>
							</div>
							<div className='pb-10'>
								<h2 className='text-2xl font-semibold leading-[48px]'>StartupManch Inc. -   <span className='text-[#45C9C1]'>Design Lead</span></h2>

								<h3 className='my-1 text-xl font-bold leading-7'>Nov 2019 - Present</h3>
								<p>Leading Design Team in branding, web design, and experience design in cross-functional collaboration with the Tech and Marketing teams for MSME and non-profit organisation.</p>
							</div>
							<div >
								<h2 className='text-2xl font-semibold leading-[48px]'>Mycaptain-  <span className='text-[#45C9C1]'>Design Captain</span></h2>
								<h3 className='my-1 text-xl font-bold leading-7'>Dec 2019 - Jan 2021</h3>
							</div>
						</div>
					</div>
				</div>
			</section>




			<section className='pt-[120px] bg-[#F8F7F2] pb-[304px] '>
				<div className='max-w-largest mx-auto flex gap-32'>
					<h1 className='text-[84px] font-semibold leading-[102px] tracking-[-1.6px]'>Awards &  <br />
						<span className='text-[#573FEA]'> Recognition</span></h1>
					<div className='text-[28px] flex font-medium flex-col gap-3 leading-[60px] -tracking-[1.6px]'>
						<p>🏆 Zeta Outstanding Performer 2020</p>
						<p>🏆 Zeta Outstanding Performer 2020</p>
						<p>🏆 Zeta Above and Beyond Awardee 2021 <br />
							<span className='pl-8'>( Shining star, Ultimate team)</span></p>
						<p>🏆 Zeta Kudos award</p>
						<p>🏆 Flipkart WOW Awards: Value Champion </p>
						<p>🏆 Flipkart Annual Awards: Innovation Award 2023</p>
						<p>🏆 Cleartrip CEO Award 2023: Customer centric </p>
					</div>
				</div>
				<div className='pt-28 pb-32 max-w-largest mx-auto  '>
					<h1 className='text-[84px] font-semibold pb-[72px] leading-[102px] text-center tracking-[-1.6px]'>Testimonials</h1>
					<div className=" border border-black border-solid col-span-3 bg-white p-8 pb-11 rounded-3xl gap-6 shadow-[8px_8px_0px_0px_#573FEA]">
						<p className=" text-xl font-medium leading-8">I am delighted to express my heartfelt appreciation for Shushant, whose exceptional talent and unwavering commitment to excellence have significantly enriched our product design team. As the Product Design Manager, I have witnessed firsthand his innovative and user-centric approach to design challenges, consistently exceeding our expectations. Shushant has not only demonstrated technical proficiency but also a remarkable ability to collaborate across teams, turning ideas into visually stunning designs. Their proactive attitude, continuous learning, and passion for creating meaningful user experiences set a standard for excellence within our team. I am grateful for their positive impact on our projects, team dynamics, and the overall work environment. Thank you Shushant, for your outstanding contributions and dedication to elevating our product design efforts.</p>
						<div className='flex py-8 gap-7'>
							<div className=' rounded-full w-12'>

							</div>
							<div>
								<h3 className='leading-7 text-xl font-semibold'>Mustafa Quilon</h3>
								<p className='leading-6'>Senior Design Manager, Zeta</p>
							</div>
						</div>

						<div className='text-center'>dots</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}

export default page