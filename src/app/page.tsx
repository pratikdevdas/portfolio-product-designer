import Image from 'next/image'
import Link from 'next/link'
import Works from '@/components/works'
import Talks from '@/components/talks'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <header>
        {/* topbar */}
        <div className='bg-[#DED9FF]'>
          <div className='py-4 text-center max-w-screen-xl mx-auto  text-[#573FEA] font-semibold'><span>💼</span> Open to work as Full-time and Freelancer . <Link href="#" className='underline'>Contact</Link></div>
        </div>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-6">
          <Link href="/"><Image src="/Shushant.svg" alt='logo' width={120} height={120} /></Link>
          <nav className="primary-navigation" id="primary-navigation">
            <ul aria-label="Primary" role="list" className="flex gap-11">
              <li><Link href="#">Work</Link></li>
              <li><Link href="#">workshop</Link></li>
              <li><Link href="#">About Me</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </nav>
          <button className="rounded-xl px-5 py-4 inline-flex justify-center text-white bg-[#573FEA]">Check Resume</button>
        </div>
      </header>
      <section className='pt-32 pb-40 text-center max-w-5xl mx-auto'>
        <h1 className='mb-16 text-6xl leading-[72px] font-medium tracking-[-1.6px]'>Hi there, I’m <br />
          <span className='text-[#573FEA]'>Shushant kumar</span></h1>
        <p className='text-2xl font-medium leading-9'>I work as a 🧑🏼‍💻 Senior Product Designer for 💼 Flipkart-Cleartrip.
          Passionate about creating functional 📏 and aesthetically 🌁 pleasing designs, constantly learning and experimenting 🔬with new system and technologies📡.</p>
      </section>
      <Works />
      <Talks />
      <Footer />
    </>
  )
}
