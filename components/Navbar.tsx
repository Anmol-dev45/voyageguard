"use client"
import React from 'react'
import Image from 'next/image'
import { NAV_ITEM } from '@/constant'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import Container from './utils/Container'
const Navbar = () => {
  const pathname = usePathname()
  if (pathname.startsWith("/studio")) return null

  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <div className='font-sans'>
            <Image src={"/Logo.svg"} width={200} height={80} alt='Image of logo' />
          </div>
          <nav className='flex items-center gap-16'>
            {
              NAV_ITEM.map((item, _i) => <Link href={item.name} key={_i} className=' text-black font-medium hover:text-primary transition-colors duration-300 ease-in capitalize'>{item.name}</Link>)
            }
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Navbar