import Image from 'next/image'

const talks = () => {
  return (
    <section className="bg-[#FFDE70] pb-[488px] pt-60  ">
      <div className="mx-auto  flex max-w-largest gap-10 pb-28">
        <h1 className="text-[84px] font-semibold leading-[92px] tracking-[-1.6px]">
          <span>Talks.</span> <br />
          <span className="text-[#573FEA]">Workshops. </span>
        </h1>
        <div className="text-lg leading-6">
          <p className="mb-6">
            From the societies of the different colleges to the new startups of
            the UX Communities. I volunteered to give my time to new students or
            people who want to learn UX, meet creative people, give lectures on
            design, research and careers in new places.{' '}
          </p>
          <p>
            I’ve had the honor of speaking at over 20+ events in some of the
            most beautiful and vibrant parts of the India. Im intent on
            challenging the ways we think about design, and being present in
            places that aren’t frequented by big conferences.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-largest auto-rows-min grid-cols-3 gap-x-5 gap-y-8">
        <div className="col-span-3 flex gap-6 rounded-3xl border border-solid border-black bg-white p-6 shadow-[8px_8px_0px_0px_#573FEA]">
          {/* workaround: explicity height reason(as i was not able to remove height auto from basic) : https://github.com/tailwindlabs/tailwindcss/pull/7742#issuecomment-1061332148 */}
          <Image
            src="/desingboat.png"
            width={746}
            height={508}
            alt="designboat"
            className="h-[508px] shrink-0"
          />
          <div>
            <Image
              src="/designboatlogo.svg"
              alt="logo"
              width={147}
              height={54}
            />
            <h1 className="py-4 text-4xl font-semibold leading-10">
              {' '}
              Designboat Design Bootcamp
            </h1>
            <p className=" font-medium leading-6">
              UI and UX Design Bootcamp by Designboat and it’s split in a 4hrs
              session for 2 days in a week for 14 weeks where mentees learn
              about user research, process, wireframes and a lot more about
              design.
              <br /> All they needed to bring was their energy to learn new and
              interesting skills., which could be anything from an app, a video
              game or even a paper prototype.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-[4px_4px_0px_0px_#573FEA]">
          <Image
            src="/kiitxshu.png"
            width={746}
            height={508}
            alt="designboat"
            className="shrink-0"
          ></Image>
          <h3 className="pt-4 text-xl font-semibold">
            Design Optimisation: Improving user experience by making design more
            efficient and effective.{' '}
          </h3>
        </div>
        <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-[4px_4px_0px_0px_#573FEA]">
          <Image
            src="/home/gdsc.png"
            width={746}
            height={508}
            alt="designboat"
            className="shrink-0"
          ></Image>
          <h3 className="pt-4 text-xl font-semibold">
            Let&apos;s Talk About: Digital Product Design
          </h3>
        </div>
        <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-[4px_4px_0px_0px_#573FEA]">
          <Image
            src="/home/suneyellow.png"
            width={746}
            height={508}
            alt="designboat"
            className="shrink-0"
          ></Image>
          <h3 className="pt-4 text-xl font-semibold">
            A Change in Perspective: Shifting focus from purely functional to
            user-centered approach in design
          </h3>
        </div>
        <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-[4px_4px_0px_0px_#573FEA]">
          <Image
            src="/home/Mworkshop.png"
            width={746}
            height={508}
            alt="designboat"
            className="shrink-0"
          ></Image>
          <h3 className="pt-4 text-xl font-semibold">
            Designing for B2B vs B2C: How they differ based on their target
            consumers&apos; and preferences
          </h3>
        </div>
        <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-[4px_4px_0px_0px_#573FEA]">
          <Image
            src="/home/lpu.png"
            width={746}
            height={508}
            alt="designboat"
            className="shrink-0"
          ></Image>
          <h3 className="pt-4 text-xl font-semibold">
            Accessibility in Product Design: Designing for All Users
          </h3>
        </div>
        <div className="rounded-3xl border border-solid border-black bg-white p-6 shadow-[4px_4px_0px_0px_#573FEA]">
          <Image
            src="/home/amrita.png"
            width={746}
            height={508}
            alt="designboat"
            className="shrink-0"
          ></Image>
          <h3 className="pt-4 text-xl font-semibold">
            Designing for Emotional Engagement: Creating Memorable User
            Experiences
          </h3>
        </div>
        {/* testimonial */}
        <div className="col-span-3 rounded-3xl border border-solid  border-black bg-white p-6 shadow-[8px_8px_0px_0px_#573FEA]">
          <h2 className="mb-4 pb-16 pt-8 text-center text-3xl font-semibold">
            been part of these colleges/corporates event
          </h2>
          <div className="mx-auto grid max-w-[1080px] grid-cols-4 items-center justify-items-center gap-20 gap-y-7 pb-20">
            <div className="w-full">
              <Image
                src="/jniit.svg"
                width={90}
                height={100}
                className="mx-auto"
                alt="college-image"
              />
              <p className="pt-2 text-center font-bold">
                Ecell, NIT Jamshedpur
              </p>
            </div>
            <div>
              <Image
                src="/shrishti.svg"
                width={74}
                height={100}
                className="mx-auto"
                alt="college-image"
              />
              <p className="pt-2 text-center font-bold">
                Shristi University, Bangalore
              </p>
            </div>
            <div>
              <Image
                src="/home/sristi.svg"
                width={74}
                height={58}
                className="mx-auto"
                alt="college-image"
              />
              <p className="pt-2 text-center font-bold">
                Shristi Media Society
              </p>
            </div>
            <div>
              <Image
                src="/home/ngage.svg"
                width={140}
                height={58}
                className="mx-auto"
                alt="college-image"
              />
              <p className="pt-2 text-center font-bold">Ngage Media</p>
            </div>

            <div className="w-full">
              <Image
                src="/home/gurughasidas.svg"
                width={58}
                height={58}
                className="mx-auto"
                alt="college-image"
              />
              <p className="pt-2 text-center font-bold">
                Guru Ghasidas Vishwavidyalaya, Bilaspur
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/home/lpulogo.svg"
                width={58}
                height={58}
                quality={100}
                className="mx-auto"
                alt="college-image"
              />
              <p className="pt-2 text-center font-bold">
                Lovely Professional University, Ludiana
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/home/amrita-logo.png"
                width={207}
                height={58}
                className="mx-auto"
                alt="college-image"
              />
              <p className="pt-2 text-center font-bold">
                Amrita Vishwa Vidyapeetham, Bangalore
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/home/gdg.svg"
                width={58}
                height={59}
                className="mx-auto"
                alt="college-image"
              />
              <p className="pt-2 text-center font-bold">GDG Kolkata</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default talks
