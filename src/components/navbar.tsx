'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname()

  return (
    <div className="sticky top-0 z-50 w-full bg-inherit">
      <div className="bg-[#DED9FF]">
        <div className="mx-auto max-w-largest py-4 text-center  font-semibold text-[#573FEA]">
          <span>💼</span> Open to work as Full-time and Freelancer .{' '}
          <Link href="#footer" className="underline">
            contact
          </Link>
        </div>
      </div>
      <div>
        <div className="mx-auto   flex max-w-largest items-center justify-between py-6">
          <Link href="/">
            <Image src="/Shushant.svg" alt="logo" width={120} height={120} />
          </Link>
          <nav className="primary-navigation" id="primary-navigation">
            <ul
              aria-label="Primary"
              role="list"
              className="flex gap-11 font-medium"
            >
              <li className={`${path === '/work' && 'text-[#573FEA]'}`}>
                <Link href="/work">work</Link>
              </li>
              <li>
                <Link href="#">workshop</Link>
              </li>
              <li className={`${path === '/about' && 'text-[#573FEA]'}`}>
                <Link href="/about">about me</Link>
              </li>
              <li>
                <Link href="#footer">contact</Link>
              </li>
            </ul>
          </nav>
          <a
            href="https://drive.google.com/file/d/1GiMfsFA9JUIHsorj5wrbBxiOXCi_QHWo/view"
            target="new"
          >
            <button className="inline-flex justify-center rounded-xl bg-[#573FEA] px-5 py-4 text-white">
              check resume
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
