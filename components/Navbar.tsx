import React from 'react'
import Image from 'next/image'
import { NAV_ITEM } from '@/constant'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        <div className='font-sans'>
          <Image src={"/Logo.svg"} width={255} height={80} alt='Image of logo' />
        </div>
        <nav className='flex items-center gap-16'>
          {
            NAV_ITEM.map(item => <Link href={item.name} className=' text-black font-medium hover:text-primary transition-colors duration-300 ease-in capitalize'>{item.name}</Link>)
          }
        </nav>
      </div>
    </header>
  )
}

export default Navbar