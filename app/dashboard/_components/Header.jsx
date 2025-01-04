import { UserButton } from '@clerk/nextjs'
import React from 'react'


import Image from 'next/image'

function Header() {
  return (
    <div className='flex shadow-lg p-5 bg-blue-500 justify-end'>
            {/* <Image
                  src="/logo.png"
                  alt="FrameFlow Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                /> */}
      <UserButton/>
    </div>
  )
}

export default Header
