import React from 'react'

const Hero = () => {
  return (
    <div className='isolate'>
      <div className='absolute inset-0 -z-10'>
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2">NEW</span>
                <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50">
                  <i className="bx bx-trending-up mr-1"></i>Next Generation design Systems
                </h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                <span className="block mb-1">Design</span>
                <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-amber-600">Without Limits</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
