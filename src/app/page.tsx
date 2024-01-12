import Works from '@/components/works'
import Talks from '@/components/talks'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import NotableCta from '@/components/notablecta'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      <section className="mx-auto max-w-5xl pb-40 pt-32 text-center">
        <h1 className="mb-16 text-6xl font-medium leading-[72px] tracking-[-1.6px]">
          Hi there, I’m <br />
          <span className="text-[#573FEA]">Shushant kumar</span>
        </h1>
        <p className="text-2xl font-medium leading-9">
          I work as a 🧑🏼‍💻 Senior Product Designer for 💼 Flipkart-Cleartrip.
          Passionate about creating functional 📏 and aesthetically 🌁 pleasing
          designs, constantly learning and experimenting 🔬with new system and
          technologies📡.
        </p>
      </section>
      <Works />
      <NotableCta />
      <Talks />
      <Footer />
    </div>
  )
}
