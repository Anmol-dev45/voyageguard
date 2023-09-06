import React from 'react'
import KeyFeature from './KeyFeature'

const Hero = () => {
  return (
    <>
      <section className='relative md:pt-28 md:pb-60'>
        <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-95 bg-fixed -z-50" style={{
          backgroundImage: "url('/Background.png')"
        }} />
        <div className="container mx-auto flex flex-col gap-8 items-center justify-center mb-12">
          <h1 className='text-white font-black font-exo text-7xl mt-56 text-center leading-[1.3em]'>Explore Nepal with <br />VoyageGuard</h1>
          <a href="">
            <button className='btn'>Start your journey</button>
          </a>

        </div>
      </section>

      <KeyFeature />
    </>
  )
}

export default Hero


//<span className='ml-2'>&#8594;</span>