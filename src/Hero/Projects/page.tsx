import React from 'react'
import Image from 'next/image'
import github from '@/Images/iconmonstr-github-1-240.png'

function Projects() {
    
  return (
    <div>
        <section>
            <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center'>My Projects</h1>
            <p className='mb-7 md:mb-15 lg:mb-20 text-xs md:text-base text-center'>A collection of what I’ve been building lately.</p>
        </section>
      <section>
        Filters
      </section>
      
      <section>
        <div className='flex flex-row'>
          <div>
            <h1>Project Title</h1>
            <p>Project description</p>
            {/* <Image src={github} alt='github-icon' className='w-[30px] h-[30px]'/> */}
            github link
            article link
          </div>
          <div>
            live app/image embeded
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
