import CardMobile from './works/CardMobile'
import CardMobile2 from './works/CardMobile2'
import CardMobile3 from './works/CardMobile3'
import CardDesktop from './works/CardDesktop'
import CardMobile4 from './works/CardMobile4'
import CardDesktop2 from './works/CardDesktop2'

const works = () => {
  return (
    <section className="mx-auto mb-32 mt-16 max-w-largest ">
      <h1 className="mb-16 text-center text-7xl font-semibold  leading-[88px] tracking-[-1.6px]">
        Selected Work.
      </h1>
      <div className="cardcontainer | flex flex-col gap-10 ">
        {/* card start */}
        < CardMobile />
        <CardDesktop2 />
        < CardMobile2 />
        < CardMobile3 />
        <CardDesktop />
        < CardMobile4 />

      </div>
    </section>
  )
}

export default works
