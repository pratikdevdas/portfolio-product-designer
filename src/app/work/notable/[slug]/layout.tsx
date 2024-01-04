import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const WorkSlug = ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  const isOnePercentBetterPage = params.slug === '1centbetter'
  return (
    <div>
      <div
        className={`${
          isOnePercentBetterPage ? 'bg-white' : 'bg-[#F8F7F2]'
        } pb-[488px]`}
      >
        <Navbar />
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default WorkSlug
