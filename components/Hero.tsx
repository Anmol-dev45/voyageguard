import React from 'react'

const Hero = () => {
  return (
    <section className='relative'>
      <div className="container mx-auto flex flex-col gap-8 items-center justify-center">
        <img src="/Background.png" alt="Mountain Background" className='absolute w-screen top-0 left-0 -z-40' />
          
          <h1 className='text-white font-black font-exo text-7xl mt-56 text-center leading-[1.3em]'>Explore Nepal with <br />VoyageGuard</h1>
          <a href="">
            <button className='btn'>Start your journey</button>
          </a>
        
      </div>
    </section>
  )
}

export default Hero


//<span className='ml-2'>&#8594;</span>