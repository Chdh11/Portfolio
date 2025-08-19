import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Projects from '@/Hero/Projects/page'
import downIcon from '@/Images/down-arrow.png'
import medium from '@/Images/iconmonstr-medium-3-240.png'
import linkedin from '@/Images/iconmonstr-linkedin-3-240.png'
import github from '@/Images/iconmonstr-github-1-240.png'
import placeholder from '@/Images/IMG_1941.png'
import article1 from '@/Images/article1_img.png'
import article2 from '@/Images/article2_img.png'
import article3 from '@/Images/article3_img.png'

function Hero() {
  return (
    <div className='text-white bg-black'>
    {/* Top bar */}
    <section className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm lg:mt-6">
        <div className="max-w-7xl mx-auto flex items-center px-4 py-3 border-0 md:border-1 rounded">
             <h1 className="text-xl font-bold">PORTFOLIO</h1>
            <div className='ml-auto flex md:gap-5'>
                <Link href='https://github.com/Chdh11' target='blank'><Image src={github} alt="Github" className='w-[30px] h-[30px]  hidden md:block '/></Link>
                <Link href='https://www.linkedin.com/in/chhavi-dhankhar-a488a9228/' target='blank'><Image src={linkedin} alt="Linkedin" className='w-[30px] h-[30px]  '/></Link>
                <Link href='https://medium.com/@chhavidhankhar07' target='blank'><Image src={medium} alt="Medium" className='w-[30px] h-[30px]  hidden md:block'/></Link>
                {/* image */}
            </div>
        </div>
    </section>

    {/* home section */}
    <section className='flex flex-col justify-center items-center text-center w-2/3 mx-auto mt-30 md:mt-45 lg:mt-60 mb-25 md:mb-25 lg:mb-40 '>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl  mb-10 font-bold'>CHHAVI DHANKHAR</h1>
        <p className='mb-10 text-xs md:text-base lg:w-[70%]'>Hi, I’m a full-stack and AI/ML developer passionate about building meaningful projects, exploring emerging tech, and continuously learning along the way</p>
        <button className='border-1 px-4 py-3 text-xs rounded-xl md:text-base rounded cursor-pointer '>Download Resume</button>
    </section>
        {/* <div className='block md:hidden w-2xl'></div> */}
    <Image priority src={downIcon} alt="Down" className='w-[40px] h-[40px] mx-auto hidden md:block mb-25 lg:mb-45  animate-bounce' />

    {/* About section */}
    <section className='flex flex-col justify-center items-center mb-20 md:mb-30 lg:mb-40'>
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-5 lg:mb-5'>A Little About Me</h1>
        <p className='mb-7 md:mb-15 lg:mb-20 text-xs md:text-base text-center mb-10 md:mb-20 lg:mb-25'>Fun fact: I love to crochet and read.</p>
       <div className="flex flex-col lg:flex-row gap-10 ml-10 mr-10 md:ml-15 md:mr-15">
        {/* lg:w-[300px] md:w-[200px] w-[250px] h-[250px] bg-white */}
            <div className="flex flex-col md:flex-row lg:flex-col">
                {/* <Image src={placeholder} alt='placeholder image' className=''/> */}
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-2xl'>Education</h1>
                    <p className='text-xs md:text-base'>I hold a Computer Engineering degree from Thapar University, with a strong foundation in software development and exposure to hardware concepts.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col">
                {/* <Image src={placeholder} alt='placeholder image' className=''/> */}
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-2xl'>What I Build</h1>
                    <p className='text-xs md:text-base'>I specialize in full-stack development and AI/ML, combining end-to-end expertise to build practical, innovative, and impactful projects.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col">
                {/* <Image src={placeholder} alt='placeholder image' className=''/> */}
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-2xl'>My Drive</h1>
                    <p className='text-xs md:text-base'>Driven by curiosity and a passion for learning, I constantly refine my skills and take on projects that push me forward.</p>
                </div>
            </div>
        </div>
    </section>
    
    {/* Projects section */}
    <Projects />

      {/* Blogs section
    <section className='flex flex-col justify-center items-center mb-30 md:mb-50 lg:mb-60'>
        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-7 lg:mb-7'>Blogs and Articles</h1>
        <p className='mb-7 md:mb-15 lg:mb-25 text-xs md:text-base'>I write sometimes.</p>
        <div className='flex flex-col gap-15 lg:flex-row ml-10 mr-10 md:ml-20 md:mr-20 lg:ml-20 lg:mr-20 mb-10 md:mb-15 lg:mb-25'>
            <Link href='https://medium.com/gitconnected/version-control-for-my-brain-how-i-document-projects-failures-and-lessons-learned-c3871355fad7' target='blank' className='flex-1 border-1 px-4 py-6 md:px-6 md:py-8 hover:scale-105  transition duration-300'>
            <div>
                <Image src={article1} alt='article1 image' className='lg:h-[250px] md:h-auto mb-5'/>
                <h1 className='text-base md:text-2xl  font-bold mb-3'>Version Control for My Brain: How I Document Projects, Failures, and Lessons Learned</h1>
                <p className='text-xs md:text-base'>Every documented mistake is a future problem you’ve already solved.</p>
            </div>
            </Link>

            <Link href='https://medium.com/@chhavidhankhar07/how-i-built-a-voice-driven-interview-prep-app-using-whisper-gemini-and-streamlit-fcfdfc8ebfe8' target='blank' className='flex-1 border-1 px-4 py-6 md:px-6 md:py-8 hover:scale-105 transition duration-300'>
            <div >
                <Image src={article3} alt='article3 image' className='lg:h-[250px] md:h-auto mb-5'/>
                <h1 className='text-base md:text-2xl font-bold mb-3'>How I Built a Voice-Driven Interview Prep App Using Whisper, Gemini, and Streamlit</h1>
                <p className='text-xs md:text-base'>A weekend project that turned into a hands-on crash course in AI app dev.</p>
            </div>
            </Link>

            <Link href='https://medium.com/@chhavidhankhar07/building-a-photobooth-web-app-with-next-js-and-supabase-5a1c580bb26f' target='blank' className='flex-1 border-1 px-4 py-6 md:px-6 md:py-8 hover:scale-105 transition duration-300 hidden lg:block'>
            <div >
                <Image src={article2} alt='article2 image' className='lg:h-[250px] mb-5'/>
                <h1 className='text-base md:text-2xl  font-bold mb-3'>Building a Photobooth Web App with Next.js and Supabase</h1>
                <p className='text-xs md:text-base'>I built this project to upskill myself with Next.js and strengthen my grasp on full-stack concepts.</p>
            </div>
            </Link>
        </div>
        <button className='border-1 px-4 py-3 text-xs md:text-base rounded cursor-pointer'>Explore more</button>
    </section> */}

    <section className="w-full px-6 md:px-12 py-12">
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
        Blogs and Articles
      </h2>
      <p className='mb-7 md:mb-15 lg:mb-20 text-xs md:text-base text-center'>I write sometimes.</p>

      <div className="flex flex-col lg:flex-row gap-6 lg:mb-20">
        
        <Link
          href="https://medium.com/gitconnected/version-control-for-my-brain-how-i-document-projects-failures-and-lessons-learned-c3871355fad7"
          target="_blank"
          className="flex-1 relative group rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300 h-[250px] md:h-[350px] lg:h-[400px]"
        >
          <Image
            src={article1}
            alt="article1 image"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
            <h1 className="text-base md:text-2xl font-bold mb-3">
              Version Control for My Brain: How I Document Projects, Failures, and Lessons Learned
            </h1>
            <p className="text-xs md:text-base">
              Every documented mistake is a future problem you’ve already solved.
            </p>
          </div>
        </Link>

        <Link
          href="https://medium.com/@chhavidhankhar07/how-i-built-a-voice-driven-interview-prep-app-using-whisper-gemini-and-streamlit-fcfdfc8ebfe8"
          target="_blank"
          className="flex-1 relative group rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300 h-[250px] md:h-[300px] lg:h-[400px]"
        >
          <Image
            src={article3}
            alt="article2 image"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
            <h1 className="text-base md:text-2xl font-bold mb-3">
              How I Built a Voice-Driven Interview Prep App Using Whisper, Gemini, and Streamlit
            </h1>
            <p className="text-xs md:text-base">
              A weekend project that turned into a hands-on crash course in AI app dev.
            </p>
          </div>
        </Link>

        <Link
          href="https://medium.com/@chhavidhankhar07/building-a-photobooth-web-app-with-next-js-and-supabase-5a1c580bb26f"
          target="_blank"
          className="flex-1 relative group rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300 h-[250px] md:h-[300px] lg:h-[400px]"
        >
          <Image
            src={article2}
            alt="article2 image"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
            <h1 className="text-base md:text-2xl font-bold mb-3">
              Building a Photobooth Web App with Next.js and Supabase
            </h1>
            <p className="text-xs md:text-base">
              I built this project to upskill myself with Next.js and strengthen my grasp on full-stack concepts.
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="https://medium.com/@chhavidhankhar07"
          target="_blank"
          className="inline-block px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-black hover:text-white transition"
        >
          Explore More
        </Link>
      </div>
    </section>


    <section className='flex flex-col md:flex-row md:gap-20 lg:gap-40 justify-center items-center mt-20 lg:mt-40 mb-20 md:mb-30 lg:mb-40'>
    <div className='flex flex-col'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-5 md:mb-10'>Let's Talk</h1>
        <button className='border-1 p-4 rounded-xl cursor-pointer text-xs md:text-base mb-5 md:mb-10'>Download Resume</button>
        <div className='flex gap-5 md:gap-10 justify-center mb-10 md:mb-0'>
            <Link href='https://github.com/Chdh11' target='blank'><Image src={github} alt="Github" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]'/></Link>
            <Link href='https://www.linkedin.com/in/chhavi-dhankhar-a488a9228/' target='blank'><Image src={linkedin} alt="Linkedin" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]  '/></Link>
            <Link href='https://medium.com/@chhavidhankhar07' target='blank'><Image src={medium} alt="Medium" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] '/></Link>
        </div>
    </div>
    <div className='px-6 py-4 rounded-xl lg:px-8 lg:py-6 md:px-6 md:py-4 border-1 border-white w-[80%] md:w-[35%]'>
        <form className='flex flex-col'>
            <label className='mb-2 md:mb-2 lg:mb-4 text-base lg:text-xl md:text-base'>Email</label>
            <input type='email' placeholder='Enter your email address' className='mb-2 md:mb-2 rounded lg:mb-4 border-1 border-white border-opacity-100 px-2 py-2 lg:px-3 lg:py-3 md:px-2 md:py-2 text-xs md:text-xs lg:text-base'/>

            <label className='mb-2 md:mb-2 lg:mb-4  text-base lg:text-xl md:text-base'>Message</label>
            <textarea placeholder='What do you want to talk about?' className='mb-2 md:mb-2 rounded lg:mb-4 border-1 border-white border-opacity-10 px-2 py-2 lg:px-3 lg:py-3 md:px-2 md:py-2 h-[150px] text-xs md:text-xs lg:text-base'/>
        </form>
    </div>
    </section>

      {/* <section className='bg-white text-black flex flex-col md:flex-row  gap-3 px-8 lg:px-20 py-10'>
        <div className='md:w-[60%] lg:w-[40%]'>
            <h1 className='font-bold text-lg'>BuildNext</h1>
            <p className='text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates sapiente rerum, dicta dolorum ipsum eum ea reiciendis qui vel!</p>
            <div>
                <h1 className='text-xs lg:text-base mt-2'>Contribute</h1>
                
            </div>
        </div>
        <div className='md:ml-auto md:text-right'>
            <h1 className='font-bold text-lg'>Contact</h1>
            <p className='text-xs lg:text-base'>chhavidhankhar07@gmail.com</p>
            <div>
               
            </div>
        </div>
      </section> */}
    </div>
  )
}

export default Hero
