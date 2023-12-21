import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
const CaseStudy = () => {
  return (
    <section>
      <Navbar />

      <div className="mx-auto mt-[102px] flex max-w-largest gap-6 text-xl leading-[30px]">
        <div className="w-[288px] shrink-0">
          <h2 className="font-semibold">In This Casestudy</h2>
        </div>
        <div>
          <div className="mb-8 flex justify-between">
            <div>Go back to work</div>
            <div>4 minute read</div>
          </div>

          <div className="header | mb-24">
            <h1 className="mb-4 text-[64px] font-semibold leading-[72px]">
              Redesigning, International Flights booking experience{' '}
            </h1>
            <p className="mb-10 text-2xl font-semibold leading-9">
              Aiming to revolutionise the way travellers plan and book their
              journeys.
            </p>
            <Image
              alt="intro"
              src="/casestudy/intlflight/intro.png"
              width={912}
              height={430}
            />
          </div>

          <div className="intro | mb-24">
            <h2 className="mb-8 text-5xl font-bold leading-[56px]">
              Introduction
            </h2>
            <div className="mb-8 flex justify-between">
              <div>
                <p className="mb-2 text-2xl font-semibold leading-8 text-[#0E0D1A] opacity-70">
                  Timeline
                </p>
                <p className="text-[32px] font-semibold leading-10">
                  Dec’ 22 - Mar’ 23
                </p>
              </div>
              <div>
                <p className="mb-2 text-2xl font-semibold leading-8 text-[#0E0D1A] opacity-70">
                  For
                </p>
                <p className="text-[32px] font-semibold leading-10 text-[#573FEA]">
                  Cleartrip
                </p>
              </div>
              <div>
                <p className="mb-2 text-2xl font-semibold leading-8 text-[#0E0D1A] opacity-70">
                  Tools Used
                </p>
                <p className="text-[32px] font-semibold leading-10">
                  Figma, Principle
                </p>
              </div>
            </div>
            <p className=" mb-6">
              In today&apos;s digital world, booking international flights
              should be a seamless and stress-free process. However, many
              airline websites and mobile applications fall short of providing a
              user-friendly experience.{' '}
            </p>
            <p className=" mb-6">
              This design case study aims to explore the process of redesigning
              the international flight booking experience, taking inspiration
              from successful UX redesigns in the airline industry. From
              analyzing current booking metrics to revamping the UX of the
              booking journey, this case study will provide insights into how a
              user-centered approach can improve the customer experience and
              build a competitive advantage for airlines.{' '}
            </p>
            <div className="flex gap-7">
              <div className="shrink-0 basis-[600px]">
                <p className="mb-2 text-2xl font-semibold leading-8 text-[#0E0D1A] opacity-70 ">
                  Tools Used
                </p>
                <p className="text-[#0E0D1A]">
                  I was accountable for user flows, explorations, interactions,
                  visuals, and prototyping. Conducted user research alongside my
                  PM using methods such as user interviews, and online study to
                  address both user behavior and attitudes.
                </p>
              </div>
              <div>
                <p className="mb-2 text-2xl font-semibold leading-8 text-[#0E0D1A] opacity-70">
                  Collaborators
                </p>
                <p className="font-medium">
                  1 x Design Manager <br />
                  1 x Product Manager
                  <br />6 x Engineers
                </p>
              </div>
            </div>
          </div>

          <div className="context | mb-24">
            <h2 className="mb-8 text-5xl font-bold leading-[56px]">Context</h2>
            <p className=" mb-6">
              Cleartrip is a website or app that makes it easy for travellers to
              plan and book their trips. It&apos;s like a digital travel agent
              that helps you find and book flights tickets, hotel, and bus
              rides. It&apos;s a convenient way to organize your travel all in
              one place.
            </p>
            <p className="mb-2 text-2xl font-semibold leading-8 text-[#0E0D1A] opacity-70">
              Collaborators
            </p>
            <p className=" mb-6">
              Booking an international flight is a bit like reserving a seat on
              an airplane for a trip to another country, and you can do it
              online. You start by telling a travel website or app where
              you&apos;re leaving from and where you want to go, usually to
              another country. Then, you pick the day you want to fly. The
              website or app shows you all the available flights for that day,
              like different choices for your trip. These flights are offered by
              different airlines and come at different times and prices. Once
              you find a flight that matches when you want to go and what
              you&apos;re willing to spend, you choose it and pay online, just
              like when you buy something from the internet. After you pay, they
              send you an email with all the important details about your
              flight, like when it&apos;s happening and where you&apos;ll leave
              from and arrive.{' '}
            </p>
          </div>

          <div className="problem | mb-24">
            <h2 className="mb-8 text-5xl font-bold leading-[56px]">Problem</h2>
            <p className=" mb-6">
              The current design for international flight book ing poses several
              usability challenges. Firstly, crucial information is easily
              overlooked, leading to potential gaps in understanding travel
              details. The use of non-intuitive icons adds to the confusion,
              making navigation less user-friendly. Moreover, important
              information is missing, leaving users without complete details for
              their travel plans. The high scroll length within the app and
              website further compounds the issue, making it time-consuming for
              users to find the information they need. Additionally, the overall
              journey mental model is unclear, making the international flight
              booking experience on Cleartrip less straightforward and more
              complex for users.
            </p>
            <Image
              alt="intro"
              src="/casestudy/intlflight/intro.png"
              width={912}
              height={430}
              className="mb-8"
            />
            <div className="grid-rows-10 mb-8 grid grid-cols-2 gap-6">
              <div className="row-span-4 row-start-1 flex gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  1
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  The departure, arrival, and duration times are easily confused
                  as all three numbers appear similar and can be easily
                  overlooked.
                </div>
              </div>
              <div className="row-span-3 row-start-5 flex h-min gap-4 rounded-2xl bg-[#F3F1EB] p-4 ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  2
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Users find it challenging to intuitively understand Airport
                  codes{' '}
                </div>
              </div>
              <div className="row-span-3 flex h-min gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white ">
                  3
                </div>
                <div className="h-min rounded-2xl text-base text-[#0E0D1A]">
                  Unfamiliar icons were challenging for users to grasp and
                  understand.
                </div>
              </div>
              <div className="col-start-2 row-span-4 flex gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  4
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Crucial information is tucked away in the details page, and
                  accessing it involves excessive scrolling due to the length of
                  the page.
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-[#F3F1EB] p-4 ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  5
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  The arrangement and depth of filters make it challenging to
                  easily navigate and comprehend.
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-[#F3F1EB] p-4   ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  6
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Users find it difficult to grasp the sorting options due to
                  lack of intuitiveness & visibility.
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#573FEA] px-6 py-10 text-white">
              <p className="mb-4 text-base font-semibold opacity-70">Goal</p>
              <p className="mb-9 text-2xl font-semibold">
                The primary goal is to empower users to easily find the best
                flight options in a shorter amount of time, ensuring a more
                intuitive and efficient booking journey.
              </p>

              <div>
                <p className="mb-4 text-base font-semibold opacity-70">
                  Success Metrics
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="bg-[#745DFF] p-4 ">
                    <div className="mb-2 flex gap-2">
                      <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[4px] bg-white text-xs font-semibold text-[#2F0DFF]">
                        1
                      </div>
                      <div className="text-base font-semibold text-white">
                        Reduce time spend on tasks
                      </div>
                    </div>
                    <p className="text-sm font-light ">
                      {' '}
                      Reduce the time users spend on each task by streamlining
                      the booking process and eliminating unnecessary steps
                    </p>
                  </div>
                  <div className="bg-[#745DFF] p-4 ">
                    <div className="mb-2 flex gap-2">
                      <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[4px] bg-white text-xs font-semibold text-[#2F0DFF]">
                        1
                      </div>
                      <div className="text-base font-semibold text-white">
                        Reduce time spend on tasks
                      </div>
                    </div>
                    <p className="text-sm font-light ">
                      {' '}
                      Reduce the time users spend on each task by streamlining
                      the booking process and eliminating unnecessary steps
                    </p>
                  </div>
                  <div className="bg-[#745DFF] p-4 ">
                    <div className="mb-2 flex gap-2">
                      <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[4px] bg-white text-xs font-semibold text-[#2F0DFF]">
                        1
                      </div>
                      <div className="text-base font-semibold text-white">
                        Reduce time spend on tasks
                      </div>
                    </div>
                    <p className="text-sm font-light ">
                      {' '}
                      Reduce the time users spend on each task by streamlining
                      the booking process and eliminating unnecessary steps
                    </p>
                  </div>
                  <div className="bg-[#745DFF] p-4 ">
                    <div className="mb-2 flex gap-2">
                      <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[4px] bg-white text-xs font-semibold text-[#2F0DFF]">
                        1
                      </div>
                      <div className="text-base font-semibold text-white">
                        Reduce time spend on tasks
                      </div>
                    </div>
                    <p className="text-sm font-light ">
                      {' '}
                      Reduce the time users spend on each task by streamlining
                      the booking process and eliminating unnecessary steps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="problem | mb-24">
            <h2 className="mb-8 text-5xl font-bold leading-[56px]">
              Final Solution
            </h2>
            <p className=" mb-6">
              The solution is designed to revolutionize the user experience by
              focusing on multiple key facets. The intuitive user interface
              ensures a visually appealing and easy-to-navigate platform, while
              a smart search and navigation system.
            </p>
            <Image
              alt="intro"
              src="/casestudy/intlflight/final-solution.png"
              width={912}
              height={430}
              className="mb-8"
            />
            <div className="grid-rows-10 mb-8 grid grid-cols-2 gap-6">
              <div className="row-span-4 row-start-1 flex gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  1
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  The departure, arrival, and duration times are easily confused
                  as all three numbers appear similar and can be easily
                  overlooked.
                </div>
              </div>
              <div className="row-span-3 row-start-5 flex h-min gap-4 rounded-2xl bg-[#F3F1EB] p-4 ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  2
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Users find it challenging to intuitively understand Airport
                  codes{' '}
                </div>
              </div>
              <div className="row-span-3 flex h-min gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white ">
                  3
                </div>
                <div className="h-min rounded-2xl text-base text-[#0E0D1A]">
                  Unfamiliar icons were challenging for users to grasp and
                  understand.
                </div>
              </div>
              <div className="col-start-2 row-span-4 flex gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  4
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Crucial information is tucked away in the details page, and
                  accessing it involves excessive scrolling due to the length of
                  the page.
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-[#F3F1EB] p-4 ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  5
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  The arrangement and depth of filters make it challenging to
                  easily navigate and comprehend.
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-[#F3F1EB] p-4   ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  6
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Users find it difficult to grasp the sorting options due to
                  lack of intuitiveness & visibility.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
