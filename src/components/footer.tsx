import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const footer = () => {
  return (
    <div className="relative bg-[#0E0D1A] pb-[304px]  pt-[530px]">
      <div className="absolute left-1/2 top-0 flex flex-col items-center rounded-3xl bg-[#573FEA] px-[316px] py-[56px] text-center text-white -translate-x-1/2 -translate-y-1/2">
        <div id="footer" className="scroll-m-64">
          <Link href="/">
            <Image
              src="/sush-white.svg"
              className="mx-auto pb-8"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>
          <h1 className="pb-8 text-5xl font-semibold">Say Hello</h1>
          <p className="max-w-[576px] text-xl font-medium leading-8">
            Have an exciting opportunity and would love to collaborate on
            something cool. Feel free to reach out and say hello!
          </p>
        </div>
        <div className="flex min-w-max gap-6 py-[56px] ">
          <a href="mailto:shushant0657@gmail.com">
            <button className="inline-flex shrink-0 justify-center gap-2 rounded-xl border-[3px] border-solid border-white p-9 text-2xl font-semibold text-[white]">
              <span>Drop a mail</span>{' '}
              <Image width={32} height={32} alt="arrow" src="/whitearrow.svg" />
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1GiMfsFA9JUIHsorj5wrbBxiOXCi_QHWo/view"
            target="new"
          >
            <button className="inline-flex shrink-0 justify-center gap-2 rounded-xl border-[3px] border-solid border-white p-9 text-2xl font-semibold text-[white]">
              <span>Download Resume</span>{' '}
              <Image width={32} height={32} alt="arrow" src="/whitearrow.svg" />
            </button>
          </a>
        </div>
        <div className="flex gap-6">
          <a target="_blank" href="https://dribbble.com/Shushant0657">
            <Image src="/dribbble.svg" height={48} width={48} alt="dribbble" />
          </a>
          <a target="_blank" href="https://www.behance.net/shushant0657">
            <Image src="/behance.svg" height={48} width={48} alt="behance" />
          </a>
          <a target="_blank" href="https://www.figma.com/@shushant0657">
            <Image src="/figma.svg" height={48} width={48} alt="figma" />
          </a>
          <a target="_blank" href="https://www.facebook.com/shushant0657">
            <Image src="/facebook.svg" height={48} width={48} alt="facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/shus.exe/">
            <Image
              src="/instagram.svg"
              height={48}
              width={48}
              alt="instagram"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/shushant0657/">
            <Image src="/linkedin.svg" height={48} width={48} alt="linkedin" />
          </a>
        </div>
      </div>

      <Image
        src="/footer.svg"
        alt="footer-image"
        className="mx-auto"
        width={3503}
        height={120}
      />
    </div>
  )
}

export default footer
