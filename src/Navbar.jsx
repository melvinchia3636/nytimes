import { Icon } from '@iconify/react'
import React from 'react'
import Logo from "./assets/logo.svg"

function Navbar() {
  return (
    <div className="flex flex-col divide-y w-full">
      <div className="w-full flex flex-col justify-center items-center font-bold py-8">
        <div><img src={Logo} className="h-10" /></div>
        Lousy Version
      </div>
      <div className="flex items-center justify-between px-32 py-8">
        <ul className="flex items-center gap-16">
          <a className="relative after:content-[''] after:border-black after:absolute after:w-1/2 after:bottom-0 after:left-1/2 after:border-b-2 after:-translate-x-1/2">Home</a>
          <a>World</a>
          <a>Technology</a>
          <a>Sports</a>
          <a>Politics</a>
          <a className="flex items-center gap-1">
            More
            <Icon icon="bx:chevron-down" className="w-5 h-5" />
          </a>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Icon icon="bx:search" className="h-6 w-6" />
          </button>
          <button className="-mt-[2px]">
            <Icon icon="bx:menu" className="h-[1.6rem] w-[1.6rem]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar