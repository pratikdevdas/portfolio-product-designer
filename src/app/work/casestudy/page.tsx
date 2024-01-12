import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import discussImage from '../../../../public/casestudy/intlflight/new-tuple-discuss.png'
import tupleAllImage from '../../../../public/casestudy/intlflight/tuples-all.png'
import Footer from '@/components/footer'

const CaseStudy = () => {
  return (
    <section className="bg-white">
      <Navbar />

      <div className="mx-auto mt-[102px] flex max-w-largest items-start gap-6 text-xl leading-[30px]">
        <div className="sticky top-28 w-[288px] shrink-0">
          <h2 className="mb-8 font-semibold">In This Casestudy</h2>
          <div className="inline-flex flex-col items-start justify-start gap-3.5">
            <Link href="#introductions">Introduction</Link>
            <Link href="#context">Context</Link>
            <Link href="#problem">Problem</Link>
            <Link href="#finalsolution">Final Solution</Link>
            <Link href="#research">Research</Link>
            <Link href="#challenge">Challenge</Link>
            <Link href="#finaldesign">Final Design</Link>
            <Link href="#outcome">Outcome</Link>
            <Link href="#closingnot">Closing Notes</Link>
          </div>
        </div>
        <div className="scroll-pt-36">
          <div className="mb-8 flex justify-between text-xl font-medium">
            <Link href="/work">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1755_11579)">
                    <path
                      d="M6.73931 1.69993C7.13171 1.31105 7.13171 0.680546 6.73931 0.291663C6.34692 -0.097221 5.71071 -0.097221 5.31831 0.291663L0.2943 5.27065C0.0869423 5.47615 -0.0108404 5.74912 0.000951784 6.01826C0.000319449 6.03278 1.18654e-08 6.04738 1.18654e-08 6.06206C1.18654e-08 6.4645 0.240211 6.81113 0.585778 6.96779L5.31831 11.6579C5.71071 12.0468 6.34692 12.0468 6.73931 11.6579C7.13171 11.269 7.13171 10.6385 6.73931 10.2496L3.51768 7.05688H13C13.7956 7.05688 14.5587 7.37132 15.1213 7.93102C15.6839 8.49072 16 9.24984 16 10.0414V17.0052C16 17.5546 16.4477 18 17 18C17.5523 18 18 17.5546 18 17.0052V10.0414C18 8.72215 17.4732 7.45695 16.5355 6.52412C15.5979 5.59129 14.3261 5.06723 13 5.06723H3.34158L6.73931 1.69993Z"
                      fill="#573FEA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1755_11579">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="text-[#573FEA]">Go back to work</div>
              </div>
            </Link>
            <div>4 minutes read</div>
          </div>

          <div className="header | mb-24 scroll-pt-24">
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

          <div id="context" className="context | mb-24 scroll-mt-44">
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

          <div className="problem | mb-24 scroll-mt-44 " id="problem">
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
              src="/casestudy/intlflight/problem-red.png"
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
                  <span className="font-bold">
                    The departure, arrival, and duration
                  </span>{' '}
                  times are easily confused as all three numbers appear similar
                  and can be easily overlooked.
                </div>
              </div>
              <div className="row-span-3 row-start-5 flex h-min gap-4 rounded-2xl bg-[#F3F1EB] p-4 ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  2
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Users find it{' '}
                  <span className="font-bold">
                    challenging to intuitively understand Airport codes
                  </span>{' '}
                </div>
              </div>
              <div className="row-span-3 flex h-min gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white ">
                  3
                </div>
                <div className="h-min rounded-2xl text-base text-[#0E0D1A]">
                  <span className="font-bold">Unfamiliar icons</span> were
                  challenging for users to grasp and understand.
                </div>
              </div>
              <div className="col-start-2 row-span-4 flex gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  4
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  <span className="font-bold">
                    Crucial information is tucked away in the details page,
                  </span>{' '}
                  and accessing it involves excessive scrolling due to the
                  length of the page.
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-[#F3F1EB] p-4 ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  5
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  <span className="font-bold">
                    The arrangement and depth of filters
                  </span>{' '}
                  make it challenging to easily navigate and comprehend.
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-[#F3F1EB] p-4   ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#970000] text-[15px] font-bold text-white">
                  6
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Users find it{' '}
                  <span className="font-bold">
                    difficult to grasp the sorting options
                  </span>{' '}
                  due to lack of intuitiveness & visibility.
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

          <div
            className="finalsolution | mb-24 scroll-mt-44"
            id="finalsolution"
          >
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
                  The departure & arrival times are shown side by side, and the
                  duration is clearly visible with information on where flights
                  have layovers.
                </div>
              </div>
              <div className="row-span-3 row-start-5 flex h-min gap-4 rounded-2xl bg-[#F3F1EB] p-4 ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  2
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Icons are accompanied by text, making it simpler for users to
                  grasp and understand.
                </div>
              </div>
              <div className="row-span-3 flex h-min gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white ">
                  3
                </div>
                <div className="h-min rounded-2xl text-base text-[#0E0D1A]">
                  Sort options to arrange flight sequences, making it much
                  easier for comprehension.
                </div>
              </div>
              <div className="col-start-2 row-span-4 flex gap-4 rounded-2xl bg-[#F3F1EB] p-4">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  4
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  The primary filters are displayed upfront, and the selected
                  filters are easily visible, making it simple for users to add
                  or remove them{' '}
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-[#F3F1EB] p-4 ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  5
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  The search page displays the final amount users will receive
                  after applying the coupon.
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-[#F3F1EB] p-4   ">
                <div className="items  flex h-[24px]  w-[24px] shrink-0 items-center justify-center self-start rounded-[84px] bg-[#289203] text-[15px] font-bold text-white">
                  6
                </div>
                <div className="rounded-2xl text-base text-[#0E0D1A]">
                  Displays flights with similar prices, but they may vary in
                  stops or duration.
                </div>
              </div>
            </div>
          </div>

          <div className="research | mb-24 scroll-mt-44" id="research">
            <h2 className="mb-8 text-5xl font-bold leading-[56px]">Research</h2>
            {/* fixlater */}
            <div className="inline-flex flex-col items-start justify-start gap-8">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className=" text-[32px] font-bold leading-[56px]  text-neutral-900">
                  Frontstage: What We Can See
                </div>
                <div className=" text-xl font-normal leading-[30px]  text-black">
                  When we observe people booking flights, we notice unpleasant
                  side effects and interesting user hacks.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-6">
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    Searching for the right flight is extremely stressful.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    High prices, limited availability, artificial scarcity, a
                    plenitude of options, as well as an ingrained penchant for
                    cost traps and loopholes.
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    The flight gets more expensive with every search.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    Opaque pricing and the feeling of being on the airline’s
                    hook make travelers suspicious of cookies and tracking.
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    Flights are like looking for a needle in a haystack.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    Alone, the route from Frankfurt to Honolulu offers 8,777
                    different flight combinations. To get a handle on what’s on
                    offer, travelers turn to third-party providers like
                    skyscanners to combine different routes or Google to find
                    offers from the surrounding area and many more.
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    Long waiting times are nerve-wracking.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    Prices are recalculated, and availability is checked for
                    every search query. In our test, a query usually takes 10
                    seconds. This always leads to long waiting times in the
                    observed search behavior.
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    The quest for the best flight deal.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    The most important decision criterion for a flight is still
                    the price. But every search parameter influences it. The
                    lack of price communication reinforces the feeling of
                    intransparency.
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    The feeling of having paid too much for the flight.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    When it comes to flights, most travelers are confronted with
                    “from” prices. However, these are only available on certain
                    flights and in limited numbers. What if such flights are not
                    available? This leads to negative anchoring: what seemed
                    affordable at the beginning now seems all the more
                    expensive.
                  </span>
                </div>
              </div>
            </div>
            <div className=" mt-12 inline-flex flex-col items-start justify-start gap-8">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className=" text-[32px] font-bold leading-[56px]  text-neutral-900">
                  Backstage: What We Don’t See
                </div>
                <div className=" text-xl font-normal leading-[30px]  text-black">
                  It takes a look behind the curtain to find out that there are
                  numerous technical and business constraints that have an
                  enormous impact on flight search. Rather than years of
                  usability engineering, the search experience is largely
                  determined by third-party booking systems, dynamic pricing,
                  and cost-per-request mechanics.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-6">
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    3rd Party Booking System.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    Behind most flight searches is a reservation system running
                    called Amadeus. This is where millions of customers purchase
                    their tickets. Amadeus is mostly responsible for which data
                    points are available and how the interface is designed.
                    Airlines use those systems and can only exert limited
                    influence on a better solution.
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    Dynamic Pricing.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    Dynamic pricing is used to set the price of a product based
                    on current market conditions. Prices fluctuate in real-time
                    based on current data. This includes data on customer
                    booking behavior, competitor airline prices, popular events,
                    and a variety of other factors that affect product demand
                    and necessitate price adjustments.
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold leading-[30px]  text-black">
                    Cost per request.
                    <br />
                  </span>
                  <span className="text-xl font-normal leading-[30px]  text-black">
                    In most cases, searches are charged per request. To keep
                    costs down, airlines want to reduce search requests. This
                    leads to avoiding both pre-emptive and iterative queries.
                  </span>
                </div>
              </div>
            </div>
            <div className=" my-12 inline-flex flex-col items-start justify-start  gap-2 rounded-3xl bg-indigo-600 px-6 py-10">
              <div className="flex flex-col items-start justify-start gap-9">
                <div className="flex flex-col items-start justify-center gap-4">
                  <div className="text-base font-semibold leading-normal text-white  opacity-70">
                    Reframing The Problem
                  </div>
                  <div className="text-2xl font-semibold leading-[32px]  text-white">
                    Flight searches are structured in such a way that it is
                    highly unlikely that a customer can find a suitable flight
                    straight away because it presupposes that the traveler has
                    entered all price-relevant information before submitting the
                    search query.
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-4 pr-4">
                  <div className="opacity-70">
                    <span className="text-xl font-semibold leading-[32px] text-white">
                      The dilemma:{' '}
                    </span>
                    <span className="text-xl font-normal leading-[32px] text-white ">
                      this price-relevant information affects availability,
                      travel time, and service. At the same time, they are
                      factors for the traveler that can be changed depending on
                      the result and personal preferences and flexibility. As a
                      result, travelers develop their own user hacks to compare
                      different search parameters and weigh the trade-off
                      between price and convenience. <br /> <br /> How can we
                      give travelers a better flight search experience? Our
                      pitch is The Balancing Act: a guided dialogue between
                      traveler and airline. Strap in — we’re taking a deep dive.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" inline-flex flex-col items-start justify-start gap-6">
              <div className=" font-['Inter'] text-[32px] font-bold leading-[56px] text-neutral-900">
                The Flight Search Redesign: <br />
                Introducing The “Balancing Act”
              </div>
              <div className=" font-['Inter'] text-xl font-normal leading-[30px] text-black">
                What makes a search successful? It’s an increasingly important
                question in the age of global travel and its limitless
                possibilities. We focus on finding your personal solution. It
                puts the traveler, their occasion, and their budget at the
                center of the interaction and looks at how well the flight offer
                fits. To do this, we fundamentally change the tailoring of the
                interaction with travelers. We break down the search form into
                individual tasks and change the sequence of interactions. This
                allows a more balanced approach between friction and progress.
              </div>
            </div>

            <div className="my-6">
              <div className=" text-[32px] font-bold leading-[56px] text-neutral-900">
                Task
              </div>
              <div className=" my-6 text-xl font-normal leading-[30px] text-black">
                The task is to find a suitable flight. We see that this usually
                takes several attempts and is achieved with the help of
                different search platforms and flight brokers. This shows that
                we are clearly in a weighing phase when searching for a flight.
                Different flights, routes, and times are weighed against travel
                planning criteria as well as personal preferences and limiting
                factors of the traveler.
              </div>
              <Image
                src="/casestudy/intlflight/researchbar.png"
                alt="bars"
                height={98 + 514}
                width={66 + 845}
              />
            </div>

            <div>
              <div className="font-['Inter'] text-[32px] font-bold leading-[56px] text-neutral-900">
                Intention of use
              </div>
              <div className="font-['Inter'] text-xl font-normal leading-[30px] text-black">
                The intention of use is a key determinant of interaction. The
                better we tailor our interface to the intention of use, the
                higher the probability that the interaction will be successful.
                Research findings show that usage intentions for digital
                applications can be assigned to three categories: “Act,”
                “Understand,” and “Explore.” In our case, we can clearly
                attribute the flight search to the “Act” usage intention: users
                have a specific task and want to make progress in completing
                that task as quickly as possible. Flight search is characterized
                by a clear goal. Travelers want to get an overview of the
                available flights to find the best option for their specific
                solution space. They take a structured approach and selectively
                change search parameters to uncover inconsistencies and explore
                the limits of what is available.
              </div>
              <Image
                src="/casestudy/intlflight/researchtable.png"
                alt="bars"
                height={98 + 514}
                width={66 + 845}
              />
            </div>
            <p className=" my-6">
              To improve International booking conversion by 200- 300 bps
              (relative) from SRP → Charged led us to conduct 20+ interviews
              with different type of travellers to find out what’s wrong and how
              we can do better.
            </p>
            <div className="grid-rows-10 mb-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-[#EDE9FF] p-4">
                <div className="flex items-center gap-2 ">
                  <div className="items  flex h-[20px]  w-[20px] shrink-0 items-center justify-center self-start rounded-[4px] bg-black text-[12px] font-semibold leading-4 text-white">
                    1
                  </div>
                  <div className="text-base font-semibold text-[#0E0D1A]">
                    Flight Search Platforms and Preferences
                  </div>
                </div>
                <ul className="list-disc pl-6 pt-2 text-sm font-light text-black">
                  <li className="pb-2">
                    Explore preferences for flight search platforms e.g.,
                    Skyscanner, Google Flights, MakeMyTripS.
                  </li>
                  <li>
                    Understand criteria like cost, flexibility, and UI design
                    influencing platform choices.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#EDE9FF] p-4">
                <div className="flex items-center gap-2 ">
                  <div className="items  flex h-[20px]  w-[20px] shrink-0 items-center justify-center self-start rounded-[4px] bg-black text-[12px] font-semibold leading-4 text-white">
                    2
                  </div>
                  <div className="text-base font-semibold text-[#0E0D1A]">
                    Booking Process and Collaboration
                  </div>
                </div>
                <ul className="list-disc pl-6 pt-2 text-sm font-light text-black">
                  <li className="pb-2">
                    Analyze collaborative aspects in the booking process e.g.,
                    sharing details, comparing prices.
                  </li>
                  <li>
                    Investigate how collaboration impacts decision-making during
                    flight booking.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#EDE9FF] p-4">
                <div className="flex items-center gap-2 ">
                  <div className="items  flex h-[20px]  w-[20px] shrink-0 items-center justify-center self-start rounded-[4px] bg-black text-[12px] font-semibold leading-4 text-white">
                    3
                  </div>
                  <div className="text-base font-semibold text-[#0E0D1A]">
                    Desktop vs. Mobile Usage Trends:
                  </div>
                </div>
                <ul className="list-disc pl-6 pt-2 text-sm font-light text-black">
                  <li className="pb-2">
                    Identify user preferences regarding desktop or mobile usage.
                  </li>
                  <li>
                    {' '}
                    Understand factors influencing choices, such as real estate
                    and user interface.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#EDE9FF] p-4">
                <div className="flex items-center gap-2 ">
                  <div className="items  flex h-[20px]  w-[20px] shrink-0 items-center justify-center self-start rounded-[4px] bg-black text-[12px] font-semibold leading-4 text-white">
                    4
                  </div>
                  <div className="text-base font-semibold text-[#0E0D1A]">
                    Vacation Patterns and Planning
                  </div>
                </div>
                <ul className="list-disc pl-6 pt-2 text-sm font-light text-black">
                  <li className="pb-2">
                    Explore diverse vacation patterns and planning approaches.
                  </li>
                  <li>
                    Understand considerations like leaves, budget, and
                    destination preferences in international travel plans.
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-#27A769 mt-6 flex gap-4 rounded-2xl border bg-[#E9FFF4] p-4">
              <Image
                src="/casestudy/intlflight/Google_Sheets_logo.png"
                height={67}
                width={49}
                alt="google-sheet-icon"
                className="h-[67px] shrink-0"
              />
              <div>
                <h3 className="text-base font-bold">
                  RESEARCH :International flight User interview
                </h3>
                <p className="text-base">
                  Explore the conversation and unearthed insights from our
                  research aimed at gaining a deeper understanding of
                  international flight users and the potential benefits these
                  findings could offer us.
                </p>
              </div>
            </div>
          </div>

          <div className="challenge | mb-24 scroll-mt-44" id="challenge">
            <h2 className="mb-12 text-5xl font-bold leading-[56px]">
              Challenge
            </h2>
            <div>
              <h3 className=" mb-6 text-[32px] font-bold leading-[56px] text-neutral-900">
                Challenge 1: Areas of improvement
              </h3>
              <p className="mb-12 text-xl font-normal leading-[30px] text-black">
                I&quot;m in the process of evaluating the key segment that
                requires primary attention for funnel improvement, and I&quot;m
                identifying the initial priority to enhance conversion rates
                specifically within the international flight booking funnel.
              </p>
              <Image
                src="/casestudy/intlflight/challenge1img1.png"
                width={912}
                height={341}
                alt="challenge"
                className="mb-[62px]"
              />
              <Image
                src="/casestudy/intlflight/challenge1img2.png"
                width={848}
                height={72}
                alt="challenge-2"
                className="mb-12"
              />
              <p className="mb-12 text-xl font-normal leading-[30px] text-black">
                Here, we prioritized{' '}
                <span className="text-[#CF4444]">
                  &quot;Needs changes&quot;
                </span>{' '}
                based on research and current statistics, indicating it&apos;s
                where the maximum drop in the funnel occurs. Our initial focus
                in the first phase is to address and work on this aspect.
              </p>
            </div>

            <div className="mb-12">
              <h3 className=" mb-6 text-[32px] font-bold leading-[56px] text-neutral-900">
                Challenge 2: Understanding Competitors
              </h3>
              <p className="mb-12 text-xl font-normal leading-[30px] text-black">
                I&apos;ve thoroughly studied key competitors and leading players
                in the international flight booking sector to analyze the
                information they include in their data sets. This investigation
                aims to extract valuable insights regarding the type of data
                they prioritize and discern key takeaways that can inform and
                enhance our approach.
              </p>
              <Image
                src="/casestudy/intlflight/competitors.png"
                quality={100}
                width={912}
                height={383}
                alt="challenge"
                className="mb-[62px]"
              />
              <div className="border-#27A769 mt-6 flex gap-4 rounded-2xl border bg-[#E9FFF4] p-4">
                <Image
                  src="/casestudy/intlflight/Google_Sheets_logo.png"
                  height={67}
                  width={49}
                  alt="google-sheet-icon"
                  className="h-[67px] shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold">
                    Competitors analysis: SRP page
                  </h3>
                  <p className="text-base">
                    We aim to understand their design, functionality, and user
                    experience to gain insights for optimizing our own SRP. By
                    examining content, layout, and features, we seek to identify
                    best practices and areas for improvement to enhance our
                    users&apos; booking journey.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className=" mb-6 text-[32px] font-bold leading-[56px] text-neutral-900">
                Challenge 3: Ideate and Down-phase
              </h3>
              <p className="mb-6 text-xl font-normal leading-[30px] text-black">
                We&apos;re aiming to make important information clear at the
                tuple level for users. In our brainstorming session, we
                discussed what details should be primary (must-see) and what can
                be secondary. This helps us design with the user in mind,
                especially considering information from providers like Amadeus.
              </p>
              <p className="mb-6 text-xl font-normal leading-[30px] text-black">
                Information at the segment level that needs to be displayed is
                crucial for users to choose the right flight.
              </p>

              <div className="mb-6 inline-flex items-start justify-start gap-20 pl-8 leading-8 ">
                <ul className="inline-flex list-disc flex-col items-start justify-end gap-[9px] ">
                  <li>Airline name</li>
                  <li>Airline number</li>
                  <li>Aircraft name</li>
                  <li>Aircraft information</li>
                  <li>Airline operated by</li>
                  <li>Class</li>
                  <li>Departure time</li>
                  <li>Arrival time</li>
                  <li>Departure city</li>
                  <li>Arrival city</li>
                </ul>
                <ul className="inline-flex list-disc flex-col items-start justify-end gap-[9px]">
                  <li>Arrival city</li>
                  <li>layover information</li>
                  <li>Terminal number</li>
                  <li>Airport name</li>
                  <li>Total price</li>
                  <li>Total duration</li>
                  <li>Layover duration</li>
                  <li>Terminal change</li>
                  <li>Airport change</li>
                  <li>Transit Visa</li>
                </ul>
                <ul className="inline-flex list-disc flex-col items-start justify-end gap-[9px]">
                  <li>Nearby Airport</li>
                  <li>Baggage information</li>
                  <li>Same price element</li>
                  <li>Type of refund options</li>
                  <li>Time zone</li>
                  <li>Distance from nearby airport</li>
                  <li>offer visibility</li>
                  <li>Seat left</li>
                  <li>Price cut</li>
                </ul>
              </div>

              <p className="mb-6 text-xl font-normal leading-[30px] text-black">
                In our discussions, we engaged with various stakeholders,
                including product managers, business representatives for
                visibility insights, and developers, to understand the
                information available from Amadeus, our service provider for
                airline data.
              </p>

              <div className=" inline-flex flex-col items-start justify-start gap-3.5  leading-loose">
                <div className="  text-xl font-bold uppercase leading-loose tracking-wider text-black">
                  In tuples
                </div>
                <div className="flex flex-col items-start justify-start gap-10">
                  <div className="flex flex-col items-start justify-start gap-3.5">
                    <div className="inline-flex items-start justify-start gap-20">
                      <div className="text-xl font-bold leading-[30px]  text-indigo-600 ">
                        Primary Decision- making data point
                      </div>
                      <div className="text-xl font-bold leading-[30px]  text-indigo-600 ">
                        Secondary Decision- making data point
                      </div>
                    </div>
                    <div className="inline-flex items-start justify-start gap-24 leading-loose">
                      <div className="inline-flex flex-col items-start justify-start gap-2 text-xl font-normal leading-[30px] text-zinc-600">
                        <p>Total Price/ Coupon callout</p>
                        <p>Departure time/ Arrival time and date</p>
                        <p>Departure / Arrival airport</p>
                        <p>No. of layovers</p>
                        <p>Type of layover</p>
                        <p>Airline Name</p>
                        <p>Total duration</p>
                        <p>Seatleft callout</p>
                        <p>Layover airport(s)</p>
                      </div>
                      <div className="inline-flex flex-col items-start justify-start gap-2 text-xl font-normal leading-[30px] text-zinc-600">
                        <p>No baggage</p>
                        <p>Travel visa requirement</p>
                        <p>Terminal change</p>
                        <p>Airport change</p>
                        <p>Refund type</p>
                        <p>More options of same price</p>
                        <p>Price breakup</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 mt-10  text-xl font-bold uppercase leading-loose tracking-wider text-black">
                In expanded tuples
              </div>
              <p className="mb-6 text-xl font-normal leading-[30px] text-black">
                It is crucial to emphasize the reiteration of the expanded
                section or the ability to view detailed information on a tuple.
                In the case of international flights, transparency is vital for
                users to choose the right ticket confidently. Unfortunately,
                clicking on &quot;view details&quot; was causing a problem by
                increasing page depth, making it challenging for users to
                compare flights and contributing to a drop-off in user
                engagement.
              </p>
              <div className="inline-flex items-start justify-start gap-24 text-xl font-normal text-zinc-600">
                <div className="inline-flex flex-col items-start justify-start gap-2 leading-[30px]">
                  <p>Segment’s airline name</p>
                  <p>Segment’s airline logo</p>
                  <p>Departure airport name(code)</p>
                  <p>Departure time</p>
                  <p>Leg duration</p>
                  <p>Arrival time, day</p>
                  <p>Arrival airport name(code)</p>
                  <p>Stopover information</p>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-2 leading-[30px]">
                  <p>Stopover duration</p>
                  <p>Stopover airport name(code)</p>
                  <p>Terminal change</p>
                  <p>Airport change</p>
                  <p>Travel visa requirement</p>
                  <p>Nearby airport callout</p>
                  <p>Baggage checkin/cabin</p>
                  <p>cancellation and amendment info</p>
                </div>
              </div>
            </div>
          </div>

          <div className="finaldesign | mb-24 scroll-mt-44" id="finaldesign">
            <h2 className="mb-12 text-5xl font-bold leading-[56px]">
              Final Design
            </h2>
            <div className="iteration-1">
              <div>
                <h3 className=" mb-6 text-[32px] font-bold leading-[56px] text-neutral-900">
                  Iteration 1: Tuple redefining{' '}
                </h3>
                <h4 className="mb-4 mt-10  text-xl font-bold uppercase leading-loose tracking-wider text-black">
                  Old Tuple
                </h4>
                <p className="mb-6 text-xl font-normal leading-[30px] text-black">
                  The previous tuple design posed challenges in user
                  understanding. Departure, arrival, and duration times were
                  easily confused due to their similarity, potentially leading
                  to oversight. Users also found it challenging to intuitively
                  grasp airport codes. Additionally, unfamiliar icons in the
                  design were a hurdle for users, making it difficult for them
                  to comprehend and navigate seamlessly.
                </p>
                <Image
                  src="/casestudy/intlflight/old-tuple-top.png"
                  quality={100}
                  width={912}
                  height={341}
                  alt="challenge"
                  className="mb-16"
                />
              </div>

              <div>
                <h4 className="mb-14 mt-10 font-bold uppercase leading-loose tracking-wider">
                  New Tuple Iternation
                </h4>
                <p className="mb-6 font-normal leading-[30px]">
                  I initiated the iteration process to address various use cases
                  effectively. <br /> <br />
                  The first step involved collaborating with stakeholders, where
                  I presented and discussed potential ideas. This presentation
                  showcased my approach to tackling the problem, and through
                  constructive dialogue, we gained approvals on the preferred
                  direction to proceed. <br />
                  <br />
                  Subsequently, I collaborated with the design team to delve
                  into the details of 3-4 selected tuples. The goal was to
                  choose a design that not only resolved the current challenges
                  but also demonstrated scalability for application in domestic
                  booking scenarios. This collaborative session aimed to ensure
                  that the selected tuple design aligned with both immediate
                  needs and future requirements.
                </p>
                <Image
                  src={discussImage}
                  quality={100}
                  alt="challenge"
                  className="mb-16"
                />
                <p className="mb-16 font-normal leading-[30px]">
                  Over the course of two days, I delved into over 10 iterations
                  of tuples, putting a lot of thought into crafting a
                  user-friendly design. My goal was to not only solve various
                  use cases but also to fine-tune how information is presented.
                  Throughout this process, my focus was on making sure the
                  design would seamlessly work across all platforms, ensuring a
                  pleasant experience for users. It was important for me to not
                  just address current challenges but also to set up the design
                  for easy adaptability in the future across different devices.
                </p>
                <Image
                  src={tupleAllImage}
                  quality={100}
                  alt="challenge"
                  className="mb-16"
                />
              </div>
              <div>
                <h4 className="mb-4  text-xl font-bold uppercase leading-loose text-black">
                  Final Design
                </h4>
                <p className=" text-xl font-normal leading-[30px] text-black">
                  In reaching the final design of tuples, I implemented several
                  improvements based on valuable insights gathered from earlier
                  considerations:
                  <br />
                </p>

                <ol className="my-6 flex list-decimal flex-col gap-6 pl-8 leading-[30px]">
                  <li>
                    <span className=" font-bold ">Time Clarity:</span>
                    <span className=" font-normal ">
                      {' '}
                      To enhance user understanding, departure and arrival times
                      were strategically positioned side by side. Additionally,
                      the duration of flights was made more prominent, providing
                      users with clear information on layovers.
                      <br />
                    </span>
                  </li>

                  <li>
                    <span className=" font-bold ">
                      Icon and Text Integration:
                    </span>
                    <span className=" font-normal ">
                      {' '}
                      To address the challenge of unfamiliar icons, I opted for
                      an approach where icons were accompanied by descriptive
                      text. This decision aimed at simplifying the user
                      experience by ensuring a better understanding of visual
                      elements.
                      <br />
                    </span>
                  </li>

                  <li>
                    <span className=" font-bold ">Transparent Pricing:</span>
                    <span className=" font-normal ">
                      {' '}
                      Aiming for transparency in the booking process, the search
                      page was modified to display the final amount users would
                      receive after applying any available coupons. This
                      provides users with a clear and accurate view of the total
                      cost.
                      <br />
                    </span>
                  </li>
                  <li>
                    <span className=" font-bold ">Comparative Display:</span>
                    <span className=" font-normal">
                      {' '}
                      Recognizing the importance of user-friendly comparisons,
                      the design was refined to showcase flights with similar
                      prices. However, the variations in stops or duration were
                      highlighted, allowing users to make informed decisions
                      based on their preferences.
                      <br />
                    </span>
                  </li>
                </ol>

                <p>
                  By incorporating these enhancements, the final design of
                  tuples not only tackled the initial challenges but also
                  prioritized user clarity, transparency, and ease of comparison
                  throughout the flight booking process.
                </p>
                <Image
                  src="/casestudy/intlflight/iteration1-tuple1.png"
                  quality={100}
                  width={864}
                  height={427 + 24 + 24}
                  alt="challenge"
                  className="my-16"
                />
              </div>
            </div>
            <div className="iteration-2">
              <div>
                <h3 className=" mb-6 text-[32px] font-bold leading-[56px] text-neutral-900">
                  Iteration 2: Filter and sort{' '}
                </h3>
                <h4 className="mb-4 mt-10  text-xl font-bold uppercase leading-loose tracking-wider text-black">
                  Old Filter and Sort
                </h4>
                <p className="mb-6 leading-[30px]">
                  The current state of the system presents challenges for users
                  in terms of filter navigation and comprehension due to the
                  arrangement and depth of filters. Additionally, users
                  encounter difficulty in understanding and utilizing sorting
                  options, citing issues with both intuitiveness and visibility.
                </p>
                <Image
                  src="/casestudy/intlflight/interation-2image1.png"
                  quality={100}
                  width={859 + 24 + 24}
                  height={684 + 24 + 24}
                  alt="challenge"
                  className="mb-16"
                />
                <h4 className="font -['Inter'] mb-4  mt-10 text-xl font-bold uppercase leading-loose tracking-wider text-black">
                  Final Design
                </h4>
                <p className="mb-6 leading-[30px]">
                  In the journey towards the final design of filters and sorting
                  options, I began by addressing user comprehension concerns.
                  Recognizing that users typically think in terms of speed and
                  cost, I implemented sort options that allow users to arrange
                  flight sequences based on factors like fastest and cheapest.
                  This intuitive approach aimed to align the system with
                  users&apos; thought processes before delving into the details.{' '}
                  <br /> <br />
                  To enhance usability, I strategically positioned primary
                  filters such as stops, airlines, and time of flight upfront.
                  This decision was informed by research indicating that these
                  filters are the most frequently used by users. The
                  user-centric design also focused on making the selected
                  filters highly visible, ensuring that users can easily
                  identify and manage their choices. This approach streamlines
                  the filtering process, providing a more intuitive and
                  user-friendly experience that addresses both comprehension and
                  visibility concerns expressed in earlier evaluations.
                </p>
                <Image
                  src="/casestudy/intlflight/iteration-2img2.png"
                  quality={100}
                  width={864 + 48}
                  height={752}
                  alt="challenge"
                  className="mb-16"
                />
              </div>
            </div>
            <div className="iteration-3">
              <div>
                <h3 className=" mb-6 text-[32px] font-bold leading-[56px] text-neutral-900">
                  Iteration 3: Expanded Tuple{' '}
                </h3>
                <h4 className="mb-4 mt-10  text-xl font-bold uppercase leading-loose tracking-wider text-black">
                  Old Expanded Tuple
                </h4>
                <p className="mb-6 leading-[30px]">
                  In the previous expanded tuple design, users faced several
                  usability issues. The excessive scrolling required to access
                  information within the in-page expand section made it
                  inconvenient for users to read details and compare two flight
                  options effectively. The airport code proved to be unhelpful
                  for many users in understanding layovers, and the airport
                  names lacked clarity. Additionally, crucial information such
                  as check-in and cabin baggage details, as well as cancellation
                  and amendment policies, were hidden behind multiple clicks,
                  making it non-intuitive for users to access essential
                  information promptly. Overall, the expanded tuple took up
                  considerable space without providing commensurate utility to
                  users, contributing to a less-than-optimal user experience.
                </p>
                <Image
                  src="/casestudy/intlflight/iteration-3img1.png"
                  quality={100}
                  width={859 + 24 + 24}
                  height={684 + 24 + 24}
                  alt="challenge"
                  className="mb-16"
                />
                <h4 className="mb-4 mt-10 text-xl font-bold uppercase leading-loose tracking-wider text-black">
                  New expanded tuple
                </h4>
                <p className="mb-6 leading-[30px]">
                  In this updated version of the expanded tuple, I aimed to
                  enhance the user experience by introducing a side sheet
                  design. This design allows users to focus entirely on the
                  specific flight they are interested in, providing a seamless
                  transition for users to proceed or go back as needed. The
                  improved hierarchy and layout make it easier for users to scan
                  information efficiently. I also incorporated additional
                  details to aid users in making informed choices, including a
                  clearer presentation of layover information, baggage details
                  placed at the end for better organization, and a dedicated
                  fare rules tab. The inclusion of the fare rules tab enables
                  users to review cancellation and date change policies before
                  navigating to the itinerary page, empowering them to make
                  well-informed decisions.
                </p>
                <Image
                  src="/casestudy/intlflight/iteration-3img2.png"
                  quality={100}
                  width={864 + 48}
                  height={752}
                  alt="challenge"
                  className="mb-16"
                />
              </div>
            </div>

            <div className="final-design">
              <div className="mb-6 font-['Inter'] text-[32px] font-bold leading-[56px] text-neutral-900">
                Final Design
              </div>
              <div className=" font-['Inter'] text-xl font-normal leading-[30px] text-black">
                Every element in this screen is important for a user to book a
                right flight, we&apos;ve fine-tuned various design elements for
                better user-friendly experience. We&apos;ve strategically placed
                everything from time to icon, and introduced intuitive sorting
                options. Filters, influenced by user habits, and seamlessly
                organized for better visibility.
                <br />
                The expanded tuple now boasts a side sheet design, inspired by
                users feedback, allowing users to focus effortlessly on your
                chosen flight. We&apos;ve enhanced information scanning, added
                helpful details like clear layover information and well-placed
                baggage details. The new dedicated fare rules tab ensures you
                have all the information on cancellation and date change
                policies right upfront, empowering you to make informed
                decisions.
                <br />
                Our goal has always been to prioritize your needs, providing a
                clear, transparent, and easy-to-navigate flight booking
                experience.
              </div>
            </div>
            <Image
              src="/casestudy/intlflight/challege-last-final.png"
              alt=""
              width={912}
              height={499 + 48}
              className="
            mt-4"
            />
          </div>

          <div className="outcome | mb-24 scroll-mt-44" id="outcome">
            <h2 className="mb-8 text-5xl font-bold leading-[56px]">Outcome</h2>
            <h3 className=" mb-4 text-[32px] font-bold leading-[56px] text-neutral-900">
              Launched the new version by the end of jun&apos;23
            </h3>
            <p className="mb-9 text-xl font-normal leading-[30px] text-black">
              We successfully rolled out the latest version with the redesigned
              tuples and enhanced user-friendly features. With the design
              largely settled, I collaborated closely with our dedicated
              engineering team throughout the implementation phase. Weekly
              sync-ups with both the engineers and product manager allowed for
              continuous status updates and addressing any challenges. Despite
              encountering a few hiccups, I made minor iterations and devised
              workarounds to ensure a seamless process. The new version,
              featuring all the anticipated features, was successfully launched
              by the end of June 2023
            </p>
            <Image
              src="/casestudy/intlflight/outcomegrp.svg"
              width={912}
              height={265}
              alt=""
              className="mb-10"
            />

            <Image
              src="/casestudy/intlflight/outcomemain.png"
              width={912}
              height={265}
              alt=""
            />
          </div>

          <div className="closing | mb-24 scroll-mt-44" id="closingnot">
            <h2 className="mb-8 text-5xl font-bold leading-[56px]">
              Closing Notes
            </h2>
            <p className=" mb-6">
              Initially, our team wasn&apos;t entirely sure about making
              changes, thinking we were doing well in the international market.
              However, when we closely looked at how many people were actually
              completing their bookings, we were in for a surprise. The numbers
              showed a whopping 200% increase in the total value of
              international flight bookings! <br />
              This eye-opening data convinced us that there&apos;s a real
              opportunity to grow in the international market. So, we&apos;ve
              decided to invest more in the next quarter, especially in making
              international flight experiences even better for you. We&apos;re
              excited to bring you more options and improvements based on this
              great news! Your positive experiences and feedback keep us
              motivated to keep enhancing our services.
            </p>
          </div>
        </div>
      </div>

      <div className="mt mx-auto mb-[488px] flex max-w-largest py-[120px]">
        <h3 className="text-5xl font-semibold leading-[92px] tracking-[-1.6px]">
          Similar casestudy
        </h3>
      </div>
      <Footer></Footer>
    </section>
  )
}

export default CaseStudy
