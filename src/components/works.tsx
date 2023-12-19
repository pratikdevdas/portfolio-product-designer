import Image from 'next/image'
import Card from './works/Card'

const works = () => {
  return (
    <section className="mx-auto mb-32 mt-16 max-w-largest ">
      <h1 className="mb-16 text-center text-7xl font-semibold  leading-[88px] tracking-[-1.6px]">
        Selected Work.
      </h1>
      <div className="cardcontainer | flex flex-col gap-10 ">
        {/* card start */}
        <Card />
        <div className="relative flex justify-between gap-32 rounded-3xl border border-solid border-black bg-[#FFE9B0] px-24 py-24 pt-28 shadow-workCard">
          <div className="basis-3/6 text-center">
            <h1 className="mb-7 mt-16 text-[64px] font-semibold leading-[80px] ">
              Luminoss
            </h1>
            <p className="mb-16 text-lg font-medium leading-6 opacity-70">
              Luminos is a Customer Engagement suite and offers the following
              capabilities: Multi-channel Marketing automation ,Rewards and
              Loyalty management App / Web based user engagement platform.
            </p>
            <button className="inline-flex justify-center gap-2 rounded-xl border-[3px] border-solid border-[#573FEA] p-9 text-2xl font-semibold text-[#573FEA]">
              <span>Read this casestudy</span>{' '}
              <Image
                width={32}
                height={32}
                alt="arrow"
                src="/external-arrow.svg"
              />
            </button>
          </div>
          <div className=" absolute right-0 top-0 rounded-bl-[20px] rounded-tr-[22px] border border-r-0 border-t-0 border-solid border-black bg-white pb-5 pl-5 pr-0 pt-0 shadow-workCardDesktop">
            <Image
              width={480}
              className="h-[493px] rounded-bl-[8px] rounded-tr-[20px] border border-r-0 border-solid border-black"
              height={493}
              src="/luminos.png"
              alt="luminos"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default works
