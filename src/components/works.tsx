import CardMobile from './works/CardMobile'
// import CardDesktop from './works/CardDesktop'

const works = () => {
  return (
    <section className="mx-auto mb-32 mt-16 max-w-largest ">
      <h1 className="mb-16 text-center text-7xl font-semibold  leading-[88px] tracking-[-1.6px]">
        Selected Work.
      </h1>
      <div className="cardcontainer | flex flex-col gap-10 ">
        {/* card start */}
        <CardMobile />
        {/* <CardDesktop /> */}
      </div>
    </section>
  )
}

export default works
