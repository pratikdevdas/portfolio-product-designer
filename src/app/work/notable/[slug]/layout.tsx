import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const WorkSlug = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-[#F8F7F2] pb-[488px]">
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
